import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';

const Blog = () => {
    const blogs =[
        {id:1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/icons/blog1.svg"},
        {id:2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/icons/blog2.svg"},
        {id:3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/icons/blog3.svg"},
    ];
  return (
    <div className='font-now bg-white py-10' id='testimonial'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl text-neutralDGrey pb-6 font-semibold'>Caring is the <span className='text-brandPrimary'>new marketing</span></h2>
        <p className='text-sm text-neutralGrey md:w-3/5 w-4/5 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      </div>

      {/* all blogs  */}
      <motion.div
      initial={{opacity: 0, y:200, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0, y:0 }}
      viewport={{once: true}}
       className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-between items-center pt-8'>
        {
            blogs.map(blog => <div key={blog.id} className='mx-auto relative flex flex-col items-center  mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='w-sm hover:scale-90 transition-all duration-500' />
                <div className=' px-4 py-2 border-4 absolute left-0 right-0 -bottom-16 bg-white w-3/4 mx-auto text-center rounded-2xl shadow-2xl'>
                    <h3 className='font-semibold text-sm text-neutralGrey'>{blog.title}</h3>
                    <div className='flex justify-center items-center'>
                             <a href="" className='font-bold flex text-brandPrimary hover:text-neutral-600'>Readmore<GoArrowRight className='w-8 mt-1'/></a>
                        </div>
                </div>
            </div>)
        }
      </motion.div>
    </div>
  )
}

export default Blog
