import React from "react";

// icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReviewCart from "./common/ReviewCart";
import client1 from "../assets/client-1.jpg";
import wire from "../assets/product-wire.jpg";

const Reviews = () => {
  return (
    <div className="mt-20 relative   ">
        <img src={wire} alt="wire" className="absolute bottom-[-160px] right-[-100px] w-[500px]    " />
      <div className="container">
        <div className="text-center     ">
          <p className="cmnTitle">for buyers</p>
          <h3 className="cmnHead">Reviews</h3>
        </div>

        {/* slider */}
        <div className=" relative  ">
          {/* slider btn */}
          <div className="">
            <button type="button" className="absolute top-[45%] left-0  ">
              <MdKeyboardArrowLeft />
            </button>
            <button type="button" className="absolute top-[45%] right-0  ">
              <MdKeyboardArrowRight />
            </button>
          </div>

          {/* slides */}
          <div className="relative overflow-hidden mx-10  ">
            <ReviewCart
              img={client1}
              review="Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
          ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh
          ipsum, blandit id."
          name="Jennifer Doe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
