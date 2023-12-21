import React from "react";
import CV from "../../assets/cv.pdf";
export default function CTA() {
  return (
    <div className="cta">
      <a download="NguyenNhatTin-CV.pdf" href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}
