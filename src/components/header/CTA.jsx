import React from 'react'
import CV from '../../assets/CV-Piotr-Wyrebek.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn btn-blank'>Download CV</a>
        <a href="#contact" className='btn btn-full'>Send me a message!</a>
    </div>
  )
}

export default CTA