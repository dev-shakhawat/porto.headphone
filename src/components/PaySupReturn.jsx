import React from 'react'

import { BiSupport } from "react-icons/bi";
import { LuCreditCard } from "react-icons/lu";
import { BiShare } from "react-icons/bi";
import PaySupRetcart from './common/PaySupRetcart';

const PaySupReturn = () => {

    const PaySubItems = [
        {
            icon: <BiSupport/> , 
            head: "customer support",
            title: "Need Assistance?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
        },
        {
            icon: <LuCreditCard/> , 
            head: "secured payment",
            title: "Safe & Fast",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet."
        },
        {
            icon: <BiShare/> , 
            head: "returns",
            title: "Easy & Free",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
        },
    ]
  return (
    <div className='py-[71px]'>
        <div className="container">
            <div className="flex gap-[80px]">
                {PaySubItems.map((item , index) => (
                    <PaySupRetcart image={item.icon} heading={item.head} title={item.title} text={item.text} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PaySupReturn