import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* target = blank will open first-clicked in new tab & any others blank targets will open in same newly-opened tab */}
        {/* target = _blank will open link in a new tab every time */}
        <a href="https://www.linkedin.com/in/piotr-wyr%C4%99bek-506ba21a9/" target="_blank" ><BsLinkedin /></a>
        <a href="https://github.com/piotrwyrebek" target="_blank" ><BsGithub /></a>
        <a href="https://www.facebook.com/piotr.wyrebek/" target="_blank" ><BsFacebook /></a>

    </div>
  )
}

export default HeaderSocials