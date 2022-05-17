import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/item1.jpg'
import IMG2 from '../../assets/item2.jpg'
import IMG3 from '../../assets/item3.jpg'
import IMG4 from '../../assets/item4.jpg'
import IMG5 from '../../assets/item5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/piotrwyrebek/portfolio',
    live: '#'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Healthy Day',
    // github: '',
    live: 'https://healthy-day.pl/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'EDGE',
    // github: '',
    live: 'https://edgearchitects.eu/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Personal website',
    github: 'https://github.com/piotrwyrebek/personal-website',
    live: 'https://kerfi.usermd.net/personal-website/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Restaurant',
    github: 'https://github.com/piotrwyrebek/restaurant',
    live: 'https://kerfi.usermd.net/restaurant/'
  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, live}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
    
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={live} className='btn btn-blank'>Live</a>
                <a href={github} className='btn btn-full' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
      }
        
      </div>
    </section>
  )
}

export default Portfolio