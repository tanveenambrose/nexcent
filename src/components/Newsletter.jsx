import React from 'react'
import { GoPaperclip } from "react-icons/go";

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 font-now'>
        <div>
            <div className='text-center '>
                <h2 className='lg:text-4xl md:w-2/5 mx-auto text-3xl text-neutral-800 font-semibold lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
                <div className='flex justify-center items-center gap-8 pt-6'>
                    <button className='btn-sexo flex mx-auto justify-center items-center gap-2'>Get a Demo <GoPaperclip/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
