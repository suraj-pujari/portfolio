import { useState } from "react";
import "./Skills.css";

export default function SkillCard({ skill }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`glass skills__card ${hover ? "skills__card--hover" : ""}`}
    >
      <div className={`skills__card-icon ${hover ? "skills__card-icon--hover" : ""}`}>
        {skill.icon}
      </div>
      <span className={`skills__card-name ${hover ? "skills__card-name--hover" : ""}`}>
        {skill.name}
      </span>
    </div>
  );
}
