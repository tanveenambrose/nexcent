import React from 'react'
import AboutIcon from '../assets/icons/aboutIcon.svg'
import member from '../assets/icons/members.svg'
import club from '../assets/icons/clubs.svg'
import Event from '../assets/icons/event.svg'
import payment from '../assets/icons/payments.svg'

const About = () => {
  return (
    <div className='bg-white font-now text-neutralGrey'>
      <div className='md:w-11/12 mx-auto flex items-center justify-between md:flex-row flex-col mb-6'>
        <div className='flex-1 flex justify-center items-center'><img src={AboutIcon} alt="" /></div>
        <div className='flex-1 md:w-3/5 mx-auto text-center md:text-start'>
            <h1 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h1>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='btn-sexo'>Learn More</button>
        </div>
      </div>

      {/* company status */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto  bg-neutralSilver py-16'>
        <div className='flex justify-around md:flex-row flex-col items-center'>
          <div className='md:w-1/2 text-center sm:text-start'>
            <h1 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local  <span className='text-brandPrimary'>business reinvent itself</span></h1>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>We reached here with our hard work and dedication</p>
          </div>

          {/* status */}
          <div className='md:1/2'>
            <div className='space-y-8 grid sm:grid-cols-2 gap-12'>
              <div className='flex items-center gap-4 '>
                <img src={member} alt="" />
                <div>
                  <h4 className='text-2xl font-semibold text-neutralDGrey'>2,232,564</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className='flex items-center gap-4 '>
                <img src={club} alt="" className='w-14'/>
                <div>
                  <h4 className='text-2xl font-semibold text-neutralDGrey'>46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className='flex items-center gap-4 '>
                <img src={Event} alt="" />
                <div>
                  <h4 className='text-2xl font-semibold text-neutralDGrey'>828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className='flex items-center gap-4 -mt-8 ml-2'>
                <img src={payment} alt="" />
                <div>
                  <h4 className='text-2xl font-semibold text-neutralDGrey'>1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
