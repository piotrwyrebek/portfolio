import React from 'react'
import './experience.css'
import {BsShieldCheck} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsWordpress} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light display-none'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__other">
        <h3>Other</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsGithub className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsWordpress className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
              </div>
            </article>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience