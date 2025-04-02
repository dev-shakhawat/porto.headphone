import React from "react";

import Title from "./common/Title";

// images
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import shap5 from "../assets/shap5.svg";
import noise from "../assets/noise.jpg";
import shap6 from "../assets/shap6.svg";
import shap3 from "../assets/shap3.svg";
import shap4 from "../assets/shap4.svg";
import product360 from "../assets/product360.jpg";
import pro360icon from "../assets/360pro.png";

const Devices = () => {
  return (
    <div className="mt-[72px]">
      {/* row one */}
      <div className="relative">
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <img src={product2} alt="pro1" />
            </div>
            <div className="w-1/2 mt-[48px]  ">
              <Title
                style="text-justify"
                title={"powerful device"}
                head={"Perfect For Everyone"}
                headsecondery={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est."
                }
                description={
                  "Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui."
                }
                btnTxt={"Reviews"}
              />
            </div>
          </div>
        </div>
        <img
          src={shap5}
          alt="shap5"
          className="absolute bottom-[-120px] left-0 w-full   "
        />
      </div>

      {/* row two */}
      <div className="bg-section mt-[100px] pt-10">
        <div className="container">
          <div className="flex">
            <div className="w-1/2 mt-[48px]  ">
              <Title
                style="text-justify"
                title={"anywhere you want"}
                head={"Bluetooth Connection"}
                headsecondery={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                description={
                  "Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui."
                }
                btnTxt={"Features"}
              />
            </div>
            <div className="w-1/2">
              <img src={product3} alt="product4" />
            </div>
          </div>
        </div>
        <img src={shap6} alt="shap6" />
      </div>

      {/* row three */}
      <div className="">
        <div className="container">
          <div className="flex flex-row-reverse ">
            <div className="w-1/2 mt-[48px]  ">
              <Title
                style="text-justify"
                title={"extra confort"}
                head={"Noise Cancelling"}
                headsecondery={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est."
                }
                description={
                  "Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui."
                }
                btnTxt={"Buy Now!"}
              />
            </div>
            <div className="w-1/2">
              <img src={noise} alt="noise" />
            </div>
          </div>
        </div>
        {/* <img src={shap6} alt="shap6" /> */}
      </div>

      {/* row four */}
      <div className="py-10 relative overflow-hidden  ">
        <img
          src={shap3}
          alt="shap3"
          className="mx-[10%] mt-10   absolute top-0 left-0 "
        />
        <div className="container">
          <div className="">
            <div className="text-center mt-16   ">
              <p className="cmnTitle">360 virtual tour</p>
              <h3 className="cmnHead capitalize">virtual tour</h3>
              <img src={product360} alt="product360" className="ml-16"/>
              <div className="flex items-center justify-center  ">
                <img src={pro360icon} alt="pro360icon" />
                <img
                  src={shap4}
                  alt="shap4"
                  className=" h-[3px] opacity-20  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
