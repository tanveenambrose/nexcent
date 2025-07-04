import React from 'react'
import mobileLogo from '../assets/icons/mobile-logo.svg';

const Products = () => {
  return (
    <div className='bg-white font-now text-neutralDGrey'>
      <div className='md:w-11/12 mx-auto flex items-center justify-between md:flex-row flex-col mb-6 py-6'>
              <div className='flex-1 flex justify-center items-center'><img src={mobileLogo} alt="" /></div>
              <div className='flex-1 md:w-3/5 mx-auto text-center md:text-start'>
                  <h1 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h1>
                  <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                  <button className='btn-sexo'>Learn More</button>
              </div>
            </div>
    </div>
  )
}

export default Products
