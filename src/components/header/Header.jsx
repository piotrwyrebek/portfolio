import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PW.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Piotr Wyrębek</h1>
        <h5 className='subtitle'>Junior Developer</h5>
        {/* <CTA></CTA> */}
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header