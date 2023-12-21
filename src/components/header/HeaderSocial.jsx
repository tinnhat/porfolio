import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a target="_blank" href="https://github.com/tinnhat">
        <FaGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/tin.nhat.12979/">
        <FaFacebookSquare />
      </a>
      <a target="_blank" href="https://www.instagram.com/nhattin12/">
        <FaInstagram />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/tin-nguyen-nhat-5b0310161/"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}
