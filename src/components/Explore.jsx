import React from "react";
import explore from "../assets/explore.png";
import playbtn from "../assets/playbtn.png";

const Explore = () => {
  return (
    <div className="relative">
      <img src={explore} alt="explore" className=" w-full object-fit-cover  " />
      <div className="absolute top-0 left-0 w-full h-full bg-primary/80   ">
        <div className="flex justify-center items-center h-full">
          <h2 className="font-bold text-[35px] leading-[42px] text-white flex items-center gap-3 ">
            <span>Explore The Best Of You</span>
            <img src={playbtn} alt="playbtn" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Explore;
