import React from "react";

import bnrshap from "../assets/bnrshap.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import headphone from "../assets/product-1.png";

const Banner = () => {
  return (
    <div className="bg-[#eff1f3] pt-[140px]  ">
      <div className="container">
        <div className="flex py-[80px]  justify-between  ">
          {/* text part */}
          <div className="w-1/2 mt-[100px] ">
            <h4 className='w-full font-popiens font-extralight text-secondary text-[30px] relative after:content-[""] after:bg-secondary after:absolute after:top-[49%] after:right-[10%] after:w-[50%] after:h-[1px]     '>
              INTRODUCING
            </h4>
            <h1 className=" font-popiens font-bold text-primary text-[67px] leading-[67px] tracking-[-0.02em]  ">
              Porto Headphone
            </h1>
            <div className="text-right mr-[50px] mt-4">
              <p className="font-normal  text-secondary text-[21px] leading-[26px]  ">
                The most advanced headphone in the world
              </p>
              <div className="flex justify-end mt-6 gap-6 items-center ">
                <p className=" cmnPera ">Starting at</p>
                <h5 className="font-bold text-[42px] leading-[26px] text-brand">
                  $<span>350</span>
                </h5>
                <button type="button" className="cmnButton">
                  Buy Now!
                </button>
              </div>
              <div className="flex justify-end mt-6 ">
                <a
                  href="#"
                  className=" text-secondary capitalize font-medium flex items-center gap-2 "
                >
                  <span>learne more</span>
                  <MdOutlineArrowForwardIos />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src={headphone}
              alt="headphone"
              className=" min-w-[1179px]   absolute top-[-10%] left-[25 %] "
            />
          </div>
        </div>
      </div>
      <div className="bg-section h-[215px]">
        <img src={bnrshap} alt="bnrshap" className=" object-cover w-full h-full  " />
      </div>
    </div>
  );
};

export default Banner;
