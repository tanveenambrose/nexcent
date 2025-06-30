import React from 'react'

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-neutralSilver font-now text-neutralDGrey'>
      <div className='text-center my-8'>
        <h1 className='text-4xl font-semibold mb-2'>Our Clients</h1>
        <p className='text-neutralGrey text-sm'>We have been working with some Foetune 500+ clients</p>
        {/* company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src="/src/assets/icons/company1.svg" alt="" />
            <img src="/src/assets/icons/company2.svg" alt="" />
            <img src="/src/assets/icons/company3.svg" alt="" />
            <img src="/src/assets/icons/company4.svg" alt="" />
            <img src="/src/assets/icons/company5.svg" alt="" />
            <img src="/src/assets/icons/company6.svg" alt="" />
            <img src="/src/assets/icons/company7.svg" alt="" />
        </div>

        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h1 className='text-4xl font-semibold mb-3'>Manage your entire community in a single system</h1>
            <p className='text-neutralGrey text-sm'>Who is Nextcent suitable for?</p>
        </div>
      </div>
    </div>
  )
}

export default Services
