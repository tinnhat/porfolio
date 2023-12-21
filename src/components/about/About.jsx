import React from "react";
import "./about.scss";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCertification } from "react-icons/bi";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className="about__card">
              <BiCertification className="about__icon" />
              <h5>Certifications</h5>
              <small>
                JavaScript Algorithms and Data Structures (FreeCodeCamp)
              </small>
            </article>
          </div>
          <div className="box-infomation">
            <p>
              I love to discover and learn new technology and i have a good
              command of building web application using ReactJs,Able to work in a
              dynamic and ever-changing industry.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
