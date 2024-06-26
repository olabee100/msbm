import React from 'react'
import Hero from './Hero';
import About from './About';
import Explain from './Explain';
import Courses from './Courses';
import Faq from './Faq';
import Testimonial from './Testimonial';


const Homepage = () => {
  return (
    <div>
        
        <Hero />
        <About />
        <Courses />
        <Explain />
        <Faq />
        <Testimonial />
       
    </div>
  )
}

export default Homepage