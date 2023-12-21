import React from 'react'
import Slider from 'react-slick'
import { data } from './projectShow'
import './style.scss'

export default function Portfolio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  }
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <Slider {...settings}>
          {data.map((item, idx) => {
            return (
              <article className='portfolio__item' key={idx}>
                <div className='portfolio__item-image'>
                  <img src={item.img} alt='' />
                </div>
                <h3>{item.description}</h3>

                <div className='info-item'>
                  <div className='portfolio__item-skills'>
                    {item.skills.map((val, index) => (
                      <p key={index}>{val}</p>
                    ))}
                  </div>
                  <div className='portfolio__item-cta'>
                    <a href={item.githubLink} className='btn' target='_blank'>
                      Github
                    </a>
                    <a
                      href={item.demoLink}
                      className='btn btn-primary'
                      target='_blank'
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
