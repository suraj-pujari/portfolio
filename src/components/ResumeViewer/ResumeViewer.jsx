import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "./ResumeViewer.css";

const RESUME_URL = "/assets/Suraj%20Pujari%20Resume.pdf";
const RESUME_FILE_NAME = "Suraj Pujari Resume.pdf";
const MIN_ZOOM = 0.85;
const MAX_ZOOM = 1.6;

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export default function ResumeViewer({ onClose }) {
  const canvasRef = useRef(null);
  const previewRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [renderState, setRenderState] = useState("loading");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    let renderTask = null;
    let resizeFrame = null;

    const renderResume = async () => {
      const canvas = canvasRef.current;
      const preview = previewRef.current;
      if (!canvas || !preview) return;

      try {
        if (renderTask) {
          renderTask.cancel();
          renderTask = null;
        }

        setRenderState("loading");
        const loadingTask = pdfjs.getDocument(RESUME_URL);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1 });
        const maxReadableWidth = 1040;
        const availableWidth = Math.max(preview.clientWidth - 32, 320);
        const targetWidth = Math.min(maxReadableWidth, availableWidth) * zoom;
        const scale = targetWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale });
        const pixelRatio = window.devicePixelRatio || 1;
        const context = canvas.getContext("2d");

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        context.clearRect(0, 0, viewport.width, viewport.height);

        renderTask = page.render({
          canvasContext: context,
          viewport,
        });

        await renderTask.promise;
        if (!cancelled) setRenderState("ready");
      } catch (error) {
        if (error?.name === "RenderingCancelledException") return;
        if (!cancelled) {
          console.error("Unable to render resume preview", error);
          setRenderState("error");
        }
      }
    };

    renderResume();
    const handleResize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(renderResume);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      if (renderTask) renderTask.cancel();
    };
  }, [zoom]);

  const zoomOut = () => setZoom((value) => Math.max(MIN_ZOOM, value - 0.15));
  const zoomIn = () => setZoom((value) => Math.min(MAX_ZOOM, value + 0.15));

  return (
    <div className="resume-viewer" onClick={onClose}>
      <div className="resume-viewer__panel" onClick={(event) => event.stopPropagation()}>
        <header className="resume-viewer__header">
          <div>
            <h2 className="resume-viewer__title">Suraj Pujari Resume</h2>
            <p className="resume-viewer__meta">PDF preview</p>
          </div>

          <div className="resume-viewer__actions">
            <div className="resume-viewer__zoom" aria-label="Resume zoom controls">
              <button
                type="button"
                onClick={zoomOut}
                className="resume-viewer__zoom-btn"
                aria-label="Zoom out"
                disabled={zoom <= MIN_ZOOM}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="resume-viewer__zoom-value"
                aria-label="Reset zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                className="resume-viewer__zoom-btn"
                aria-label="Zoom in"
                disabled={zoom >= MAX_ZOOM}
              >
                +
              </button>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-viewer__action resume-viewer__action--ghost"
            >
              Open PDF
            </a>
            <a
              href={RESUME_URL}
              download={RESUME_FILE_NAME}
              className="resume-viewer__action resume-viewer__action--primary"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="resume-viewer__close"
              aria-label="Close resume preview"
            >
              x
            </button>
          </div>
        </header>

        <div className="resume-viewer__preview-wrap" ref={previewRef}>
          {renderState === "loading" && (
            <div className="resume-viewer__loading">Loading resume...</div>
          )}
          {renderState === "error" && (
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Suraj Pujari Resume PDF fallback"
              className="resume-viewer__fallback-frame"
            />
          )}
          <canvas
            ref={canvasRef}
            className={`resume-viewer__canvas ${
              renderState === "ready" ? "resume-viewer__canvas--ready" : ""
            }`}
            aria-label="Suraj Pujari Resume preview"
          />
        </div>
      </div>
    </div>
  );
}
