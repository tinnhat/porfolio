import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Experience() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="skills-section">
              <i className="devicon-html5-plain colored icon-skill"></i>
              <p className="skills-desc">HTML5</p>
            </div>
            <div className="skills-section">
              <i className="devicon-css3-plain colored icon-skill"></i>
              <p className="skills-desc">CSS3</p>
            </div>
            <div className="skills-section">
              <i className="devicon-sass-original colored icon-skill"></i>
              <p className="skills-desc">SASS</p>
            </div>
            <div className="skills-section">
              <i className="devicon-javascript-plain colored icon-skill"></i>
              <p className="skills-desc">Javascript</p>
            </div>
            <div className="skills-section">
              <i className="devicon-typescript-plain colored icon-skill"></i>
              <p className="skills-desc">typescript</p>
            </div>
            <div className="skills-section">
              <i className="devicon-css3-plain colored icon-skill"></i>
              <p className="skills-desc">Bootstrap</p>
            </div>
            <div className="skills-section">
              <i className="devicon-tailwindcss-plain colored icon-skill"></i>
              <p className="skills-desc">Tailwind</p>
            </div>
            <div className="skills-section">
              <i className="devicon-photoshop-plain colored icon-skill"></i>
              <p className="skills-desc">Photoshop</p>
            </div>
            <div className="skills-section">
              <i className="devicon-figma-plain colored icon-skill"></i>
              <p className="skills-desc">Figma</p>
            </div>
            <div className="skills-section">
              <i className="devicon-react-original colored icon-skill"></i>
              <p className="skills-desc">ReactJS</p>
            </div>
            <div className="skills-section">
              <i className="devicon-redux-original colored icon-skill"></i>
              <p className="skills-desc">Redux</p>
            </div>
            <div className="skills-section">
              <i className="devicon-ubuntu-plain colored icon-skill"></i>
              <p className="skills-desc">Ubuntu</p>
            </div>
            <div className="skills-section">
              <i className="devicon-azure-plain colored icon-skill"></i>
              <p className="skills-desc">Azure</p>
            </div>
            <div className="skills-section">
              <i className="devicon-git-plain colored icon-skill"></i>
              <p className="skills-desc">Git</p>
            </div>
            <div className="skills-section">
              <i className="devicon-mongodb-plain colored icon-skill"></i>
              <p className="skills-desc">MongoDB</p>
            </div>
            <div className="skills-section">
              <i className="devicon-microsoftsqlserver-plain colored icon-skill"></i>
              <p className="skills-desc">MS SQL</p>
            </div>
           
          
          </Slider>
        </div>
      </div>
    </section>
  );
}
