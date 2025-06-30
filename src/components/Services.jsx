import React from 'react'

const Services = () => {
  const services = [
    {id: 1, title: "Membership Organisatons", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/membership.svg"},
    {id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/national.svg"},
    {id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/clubs.svg"},
  ]
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
        </div>

        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h1 className='text-4xl font-semibold mb-3'>Manage your entire community in a single system</h1>
            <p className='text-neutralGrey text-sm'>Who is Nextcent suitable for?</p>
        </div>
      {/* cards */}
      <div>
        {
          services.map(service => <div key={service.id} >
            <div>
              <div><img src={service.image} alt="" /></div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Services
