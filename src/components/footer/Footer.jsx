import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Nguyen Nhat Tin
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/tin.nhat.12979/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/nhattin12/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://zalo.me/0834667431" target="_blank">
          <SiZalo />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Made by Nguyen Nhat Tin</small>
      </div>
    </footer>
  );
}
