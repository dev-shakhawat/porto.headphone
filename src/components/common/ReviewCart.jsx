import React from "react";

import star from "../../assets/star.png";

const ReviewCart = ({ img , review , name }) => {
  return (
    <div className="flex gap-10">
      <img
        src={img}
        alt="img"
        className="rounded-full border-10 border-secondary/10   "
      />
      <div className="">
        <div className="flex h-[30px]   ">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <p className="cmnPera py-10 w-[90%]  ">
          {review}
        </p>
        <h4 className="font-bold text-[18px] leading-[30px] text-primary">{name}</h4>
      </div>
    </div>
  );
};

export default ReviewCart;
