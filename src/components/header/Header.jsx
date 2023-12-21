import React from "react";
import CTA from "./CTA";
import "./header.scss";
import ME from "../../assets/nt.jpg";
import HeaderSocial from "./HeaderSocial";
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nguyen Nhat Tin</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
