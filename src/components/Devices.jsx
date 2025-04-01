import React from "react";

import Title from "./common/Title";

// images
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png"
import shap5 from "../assets/shap5.svg";
import noise from "../assets/noise.jpg"
import shap6 from "../assets/shap6.svg"


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
      <div className="bg-[#eff1f3] mt-[100px] pt-10">
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
    </div>
  );
};

export default Devices;
