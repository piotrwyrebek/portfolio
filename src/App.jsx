import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div>
    {/* <div className={lightTheme === true ? 'light-theme': ''}>
      <button onClick={() => setLightTheme(lightTheme === true ? false : true)}>{lightTheme === true ? 'Dark mode' : 'Light mode'}</button>
    
      {JSON.stringify(lightTheme === true ? 'Mam włączony dark theme' : 'Mam wyłączony dark mode')}
      {JSON.stringify(lightTheme)} */}

      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App