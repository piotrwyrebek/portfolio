import React from 'react'
import './about.css'
import ME from '../../assets/PW-about.png'
import {GiMedal} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {SiPolymerproject} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiMedal className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months freelancer</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <SiPolymerproject className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ completed projects</small>
            </article>
          </div>    


          <p>So here I is, Chandler Bing, in the flesh. Selflearner. Star Wars & Friends fan. Winemaker, mountain hiker and hawaii pizza lover.</p>
          <p className='italics'>These aren't the droids you're looking for.</p>

          <a href="#contact" className='btn btn-full'>Send me a message!</a>
        </div>



      </div>
    </section>
  )
}

export default About