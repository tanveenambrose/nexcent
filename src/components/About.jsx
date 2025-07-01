import React from 'react'
import AboutIcon from '../assets/icons/aboutIcon.svg'

const About = () => {
  return (
    <div className='bg-neutralSilver font-now text-neutralGrey'>
      <div className='flex items-center justify-center md:flex-row flex-col '>
        <div className='flex-1 flex justify-center items-center'><img src={AboutIcon} alt="" /></div>
        <div className='flex-1'>
            <h1>How to design your site footer like we did</h1>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='btn-sexo'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About
