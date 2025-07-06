import React from 'react'
import mobileLogo from '../assets/icons/mobile-logo.svg';
import { GoArrowRight } from "react-icons/go";
import tesla from '../assets/icons/tesla.svg';
import { motion } from 'framer-motion'
import company1 from '../assets/icons/company1.svg';
import company2 from '../assets/icons/company2.svg';
import company3 from '../assets/icons/company3.svg';
import company4 from '../assets/icons/company4.svg';
import company5 from '../assets/icons/company5.svg';
import company6 from '../assets/icons/company6.svg';
import company7 from '../assets/icons/company7.svg';
const Products = () => {
  return (
    <div className='bg-white font-now text-neutralDGrey' id='product'>
      <div className='md:w-11/12 mx-auto flex items-center justify-between md:flex-row flex-col mb-6 py-6'>
              <motion.div
                initial={{opacity: 0, y:200}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y:0 }}
                viewport={{once: true}}
               className='flex-1 flex justify-center items-center'><img src={mobileLogo} alt="" /></motion.div>
              <motion.div
              initial={{opacity: 0, x:200}}
              transition={{duration: 2}}
              whileInView={{opacity: 1, x:0 }}
              viewport={{once: true}}
               className='flex-1 md:w-3/5 mx-auto text-center md:text-start'>
                  <h1 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h1>
                  <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                  <button className='btn-sexo'>Learn More</button>
              </motion.div>
            </div>


            {/* company info */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3 flex justify-center items-center'>
                <img src={tesla} className='w-80 h-80' alt="" />
                </div>
                <div className='md:w-2/3 mx-auto'>
                <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tanveen Ambrose</h5>
                <p className='text-sm text-gray-400'>British Dragon Boat Racing Association</p>

                <div className=''>
                  <div className='flex flex-wrap items-center gap-8'>
                    <img src={company1} alt="" />
                    <img src={company2} alt="" />
                    <img src={company3} alt="" />
                    <img src={company4} alt="" />
                    <img src={company5} alt="" />
                    <img src={company6} alt="" />
                    <img src={company7} alt="" />
                    <div className=''>
                      <a href="" className='font-bold flex text-brandPrimary hover:text-neutral-600'>Meet all customers<GoArrowRight className='w-8 mt-1'/></a>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </div>
    </div>
  )
}

export default Products
