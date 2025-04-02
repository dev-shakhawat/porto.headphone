import React from 'react'

const PaySupRetcart = ({image , heading , title , text}) => {
  return (
    <div className='text-center'>
        <div className="flex justify-center text-5xl text-brand  ">{image}</div>
        <h3 className='font-bold text-base leading-[16px] text-primary uppercase mt-7   '>{heading}</h3>
        <h5 className=' text-[14px] mt-2 leading-[26px ] text-primary  '>{title}</h5>
        <p className='cmnPera mt-2  '>{text}</p>
    </div>
  )
}

export default PaySupRetcart