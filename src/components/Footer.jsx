import React from 'react'


// icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='pt-[72px]'>
        <div className="container">
            <div className="flex">
                <div className="mr-[200px]">
                    <h3 className='font-bold text-base leading-[16px] text-primary uppercase'>customer service</h3>
                    <ul className="flex gap-4 mt-5">
                        <li className='cmnPera pr-5 border-r-[1px] border-secondary/10 '>Help & FAQs</li>
                        <li className='cmnPera pr-5 border-r-[1px] border-secondary/10 '>Order Tracking</li>
                        <li className='cmnPera pr-5 border-r-[1px] border-secondary/10 '>Shipping & Delivery</li>
                    </ul>
                </div>
                <div className="mr-[200px]">
                    <h3 className='font-bold text-base leading-[16px] text-primary uppercase'>social media</h3>
                    <ul className='flex mt-4 gap-1 '>
                        <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 overflow-hidden  "><a className=" w-full h-full grid place-items-center hover:bg-[#4867aa] hover:text-white   "  href="#"><FaFacebookF/></a></li>
                        <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 grid overflow-hidden "><a className=" w-full h-full grid place-items-center hover:bg-[#369bea]  hover:text-white "  href="#"><FaXTwitter/></a></li>
                        <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 overflow-hidden  "><a className="  w-full h-full grid place-items-center hover:bg-[#4867aa] hover:text-white"  href="#"><FaLinkedinIn/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className='font-bold text-base leading-[16px] text-primary uppercase'>payment mathod</h3>
                    <ul className='flex mt-4 gap-2 '>
                        <li className='text-4xl'><FaCcVisa/></li>
                        <li className='text-4xl'><FaCcPaypal/></li>
                        <li className='text-4xl'><FaCcStripe/></li>
                        <li className='text-4xl'><FaCcMastercard/></li>
                        <li className='text-4xl'><FaCcApplePay/></li>
                    </ul>
                </div>
            </div>
            <hr className="mt-10 bg-secondary opacity-[0.1]  " />
            <p className="cmnPera py-6 text-center  ">Porto Product Landing © Copyright 2025. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer