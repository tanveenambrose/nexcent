import React from 'react'
import { motion } from 'framer-motion'
import company1 from '../assets/icons/company1.svg';
import company2 from '../assets/icons/company2.svg';
import company3 from '../assets/icons/company3.svg';
import company4 from '../assets/icons/company4.svg';
import company5 from '../assets/icons/company5.svg';
import company6 from '../assets/icons/company6.svg';
import company7 from '../assets/icons/company7.svg';
import membership from '/src/assets/icons/membership.svg';
import national from '/src/assets/icons/national.svg';
import clubs from '/src/assets/icons/clubs.svg';

const Services = () => {
  const services = [
    {id: 1, title: "Membership Organisatons", description: "Our membership management software provides full automation of membership renewals and payments", image: {membership}},
    {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: {national}},
    {id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: {clubs}},
  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-white font-now text-neutralDGrey' id='services'>
      <div className='text-center my-8'>
        <h1 className='text-4xl font-semibold mb-2'>Our Clients</h1>
        <p className='text-neutralGrey text-sm'>We have been working with some Foetune 500+ clients</p>
        {/* company logo */}
        <motion.div
        initial={{opacity: 0, y:200}}
      transition={{duration: 2}}
      whileInView={{opacity: 1, y:0 }}
      viewport={{once: true}}
     
         className='my-12 flex flex-wrap justify-between items-center gap-8'>
              <img src={company1} alt="" />
              <img src={company2} alt="" />
              <img src={company3} alt="" />
              <img src={company4} alt="" />
              <img src={company5} alt="" />
              <img src={company6} alt="" />
              <img src={company7} alt="" />
        </motion.div>
        </div>

        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h1 className='text-4xl font-semibold mb-3'>Manage your entire community in a single system</h1>
            <p className='text-neutralGrey text-sm'>Who is Nextcent suitable for?</p>
        </div>
      {/* cards */}
      <motion.div
      initial={{opacity: 0, x:-100}}
      transition={{duration: 3}}
      whileInView={{opacity: 1, x:0 }}
      viewport={{once: true}}
     
       className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
        {
          services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 shadow-2xl cursor-pointer hover:-translate-y-5 border-0 rounded-3xl hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
            <div>
              <div className='flex items-center justify-center mb-4'><img src={service.image} alt="" className='h-14 w-24'/></div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
          </div>)
        }
      </motion.div>
    </div>
  )
}

export default Services
