import React, { useState } from "react";

import shap7 from "../assets/shap7.png";

// icons
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

// images
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";

const ViewProduct = () => {
  let [quantity ,setQuantity] = useState(1)

  const minus = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  const plus = () => {
    if(quantity < 10){
      setQuantity(quantity + 1)
    }
  }
  return (
    <div className="  ">
      <img src={shap7} alt="shap7" className="relative z-1 " />
      <div className="bg-section pb-[76px] relative">
        <div className="container">
          <div className="flex">
            {/* slider part */}
            <div className="w-[700px]">
              {/* slider container */}
              <div className=" overflow-hidden relative  h-[438px] ">
                {/* slider btns */}
                <div className=" ">
                  <button
                    type="button"
                    className=" absolute top-[50%] cursor-pointer left-[5%] z-1  "
                  >
                    <MdOutlineArrowBackIosNew />
                  </button>
                  <button
                    type="button"
                    className=" absolute top-[50%] cursor-pointer right-[5%] z-1  "
                  >
                    <MdArrowForwardIos />
                  </button>
                </div>

                {/* slider */}
                <div className="flex absolute top-0 left-0 w-full h-full ">
                  <img src={product4} alt="product4" className="" />
                  <img src={product5} alt="product5" className="" />
                  <img src={product6} alt="product6" className="" />
                  <img src={product7} alt="product7" className="" />
                </div>
              </div>
              <div className="grid grid-cols-4 mt-4 gap-4 w-full  ">
                <img src={product4} alt="product4" className="" />
                <img src={product5} alt="product5" className="" />
                <img src={product6} alt="product6" className="" />
                <img src={product7} alt="product7" className="" />
              </div>
            </div>

            {/* text part */}
            <div className="w-full ml-7">
              <h3 className=" font-bold text-[32px] leading-[42px] capitalize  ">porto headphone</h3>
              <span className=" text-[14px] mt-1 text-secondary leading-[26px]   ">(2 reviews)</span>
              <h5 className=" mt-11     ">
                <del className=" text-secondary font-medium   ">$400</del>
                <span className="font-bold text-brand leading-[30px] text-[25px] ml-2   ">$350</span>
              </h5>
              <p className="cmnPera mt-4 w-[90%]  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.
                Lorem ipsum dolor sit amet.
              </p>
              <ul className="mt-4 ">
                <li className="flex  ">
                  <p className=  " text-secondary uppercase  ">availablity :</p>
                  <span className=" text-primary font-semibold uppercase ml-1  ">available</span>
                </li>
                <li className="flex">
                  <p className=  " text-secondary uppercase  ">SKU :</p>
                  <span className=" text-primary font-semibold uppercase ml-1  ">1234567890</span>
                </li>
              </ul>
              <form action="#" className="flex flex-col mt-6 ">
                <label htmlFor="size">
                  <span className="text-[12px] leading-[26px] text-primary uppercase w-[90px] inline-block   ">size</span>
                  <select name="size" id="size" className="py-2 pl-3 border-2 border-secondary/20 w-[225px]   "  >
                    <option value={null} className=" text-12 uppercase   ">PLEASE CHOOSE</option>
                    <option value="S" className="text-[11px] text-primary  " >Small</option>
                    <option value="L" className="text-[11px] text-primary  " >Normal</option>
                    <option value="XXL" className="text-[11px] text-primary  " >Big</option>
                  </select>
                </label>
                <label htmlFor="color" className="mt-3"  >
                  <span className="text-[12px] leading-[26px] text-primary uppercase w-[90px] inline-block   ">color</span>
                  <select name="color" id="color" className="py-2 pl-3 border-2 border-secondary/20 w-[225px]   "  >
                    <option value={null} className=" text-12 uppercase   ">PLEASE CHOOSE</option>
                    <option value="B" className="text-[11px] text-primary  " >Blue</option>
                    <option value="R" className="text-[11px] text-primary  " >Red</option>
                    <option value="G" className="text-[11px] text-primary  " >Green</option>
                  </select>
                </label>
              </form>

              {/* quantity */}
              <div className="flex mt-6">
                <div className="flex border-2 border-secondary/5 rounded-[5px] overflow-hidden   " >
                  <button onClick={minus} type="button" className="px-4 py-2 font-bold cursor-pointer hover:bg-brand hover:text-white  ">-</button>
                  <p className="grid  place-items-center px-4 py-2 border-x-2 border-secondary/5  ">{quantity}</p>
                  <button onClick={plus} type="button" className="px-4 py-2 font-bold  cursor-pointer hover:bg-brand hover:text-white ">+</button>
                </div>
                <button type="button" className="cmnButton capitalize ml-4  ">buy now!</button>
              </div>

              {/* social icons */}
              <ul className="flex gap-1 mt-6  ">
                <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 overflow-hidden  "><a className=" w-full h-full grid place-items-center hover:bg-[#4867aa] hover:text-white   "  href="#"><FaFacebookF/></a></li>
                <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 overflow-hidden  "><a className="  w-full h-full grid place-items-center hover:bg-brand hover:text-white"  href="#"><FaGooglePlusG/></a></li>
                <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 grid overflow-hidden "><a className=" w-full h-full grid place-items-center hover:bg-[#369bea]  hover:text-white "  href="#"><FaXTwitter/></a></li>
                <li className="w-[33px] h-[33px] rounded-full border-2 border-secondary/20 grid overflow-hidden "><a className=" w-full h-full grid place-items-center hover:bg-brand hover:text-white  "  href="#"><MdOutlineMailOutline/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
