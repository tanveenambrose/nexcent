import React from 'react'
import Logo from '../assets/Icon.svg'
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, } from "react-icons/bs";


const MyFooter = () => {
  return (
    <Footer container className='bg-[#1e2939] text-neutralSilver'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={Logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#e5eaec]'>Nexcent</span></a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About Us" />
              <FooterLinkGroup col>
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#services">Service</FooterLink>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#product">Product</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/tanveenambrose">Github</FooterLink>
                <FooterLink href="https://www.facebook.com/rakibulalamtanveen/">Facebook</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by=" Copyright 2025 © GreatStack. All Right Reserved.™" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/rakibulalamtanveen/" target='_blank' icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/_aila_tanu_/" target='_blank' icon={BsInstagram} />
            <FooterIcon href="https://github.com/tanveenambrose" target='_blank' icon={BsGithub} /> 
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
