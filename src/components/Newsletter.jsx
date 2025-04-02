import React from 'react'


import { GoMail } from "react-icons/go";
const Newsletter = () => {
  return (
    <div className='py-[50px] bg-section  '>
        <div className="container">
            <div className="flex gap-10">
                <div className="flex  items-center gap-2 w-[45%]  ">
                    <GoMail className='text-5xl'/>
                    <div className="">
                        <h3 className='font-bold text-[20px] leading-[16px] text-primary '>Subscribe To Our Newsletter</h3>
                        <p className='cmnPera'>Get all the latest information on Events, Sales and Offers.</p>
                    </div>
                </div>

                {/* form */}
                <form action="#" className="flex bg-white w-[55%] ">
                    <input type="text" className=' py-4 pl-6 w-full   ' placeholder='Your E-mail Address' />
                    <button type='button'  className='py-4 px-[49px] bg-brand text-white font-bold text-base leading-[25px] w-[350px] uppercase '>subscribe now!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter