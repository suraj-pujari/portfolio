import { useState } from "react";
import RevealSection from "../shared/RevealSection";
import { CERTS } from "../../constants/data";
import CertCard from "./CertCard";
import CertModal from "./CertModal";
import "./Certifications.css";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certs" className="certifications">
      <div className="container">
        <RevealSection>
          <div className="section-header">
            <span className="chip chip--green">Certificates</span>
            <h2 className="section-title">Credentials earned</h2>
            <p className="certifications__subtitle">Click any certificate to view it in full</p>
            <div
              className="section-divider"
              style={{ background: "linear-gradient(to right, #10d9a0, #a855f7)" }}
            />
          </div>
        </RevealSection>

        <div className="certifications__grid">
          {CERTS.map((cert, i) => (
            <RevealSection key={cert.id} delay={i * 120}>
              <CertCard cert={cert} onClick={() => setSelectedCert(cert)} />
            </RevealSection>
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}
