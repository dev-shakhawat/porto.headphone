import React from 'react'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// images
import usa from '../assets/usa.png'
import france from '../assets/france.webp'
import espanal from '../assets/espanal.svg'
import cart from '../assets/cart.svg'


const Navbar = () => {
    const navlinks = ["Intro" , "Features" , "Tour" , "Specifications" , "Reviews" , "Buy Now"]
  return (
    <div className='py-8 bg-section fixed top-0 left-0 w-full z-50 '>
        <div className="container">
            <div className="flex items-center justify-between  ">
                <div className="flex items-center">
                   <img src="/images/logo.png" alt="logo" />

                   {/* nav links */}
                   <ul className='ml-[48px] flex gap-10 font-popiens font-semibold text-[14px]  '>
                    {navlinks.map((link , index) => <li key={index} > <a href="#" className='navlink'> {link}</a></li>)}
                   </ul>
                </div>

                <div className="flex gap-5">
                    <ul className='flex gap-5'>
                        <li className='navDropdown group '>
                            <span>USD</span><MdOutlineKeyboardArrowDown/>
                            <ul className='navDropdownUl hidden group-hover:block  '>
                                <li className=' dropdownlist '>EUR</li>
                                <li className=' dropdownlist '>BEL</li>
                            </ul>
                        </li>
                        <li className='navDropdown group '>
                            <span>ENG</span><MdOutlineKeyboardArrowDown/>
                            <ul className='navDropdownUl hidden group-hover:block  '>
                                <li className='dropdownlist  '><img src={usa} alt="usa"  className='w-[20px]'/>EN</li>
                                <li className='dropdownlist '><img src={espanal} alt="espanal"  className='w-[20px]'/>Espanol</li>
                                <li className='dropdownlist  '><img src={france} alt="france"  className='w-[20px]'/>Francecaise</li>
                            </ul>
                        </li>
                    </ul>
                    <button type="button" className='w-[25px] h-[25px] relative'>
                        <img src={cart} alt="cart" />
                        <span className="absolute w-[15px] h-[15px] rounded-full bg-brand text-[10px] top-[-5px] right-[-5px] text-white  ">1</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar