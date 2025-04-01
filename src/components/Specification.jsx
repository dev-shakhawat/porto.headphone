import React from "react";

const Specification = () => {

    const SpeciBox = [
        {idone: ["Designed For" , "Circumaural" , "Magnet Type" , "Wih Microphone"] , idtwo: [" Smartphones" , "Supra-aural" , "Neodymium" , " Yes"]},
        {idone: ["Designed For" , "Circumaural" , "Magnet Type" , "Wih Microphone"] , idtwo: [" Smartphones" , "Supra-aural" , "Neodymium" , " Yes"]},
        {idone: ["Designed For" , "Circumaural" , "Magnet Type" , "Wih Microphone"] , idtwo: [" Smartphones" , "Supra-aural" , "Neodymium" , " Yes"]},
    ]
  return (
    <div className="bg-[#212529] py-[73px]  ">
      <div className="container">
        <div className="flex">
          <div className="">
            <p className="cmnTitle">the most powerfull</p>
            <h2 className=" text-white font-bold text-[35px] leading-[42px]  ">
              Specifications
            </h2>
            <p className="font-medium mt-6 text-[17px] leading-[30px] text-secondary">
              Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
              ultricies nibh gravida, accumsan libero luctus, molestie nunc. In
              nibh ipsum, blandit id faucibus ac, finibus vitae dui.
            </p>
          </div>
          <div className="flex w-[50%] items-end justify-end gap-2 ">
            <div className="">
              <p className="cmnPera">starting at</p>
              <h5 className="font-bold text-[42px] leading-[26px] text-brand mt-3  ">
                $<span>350</span>
              </h5>
            </div>
            <button type="button" className="cmnButton h-fit ">
              Buy Now!
            </button>
          </div>
        </div>

        <h3 className="font-bold text-[20px] mt-10 leading-[42px] text-white uppercase  ">general</h3>
        <div className="grid grid-cols-3   ">
            {SpeciBox.map((item , index) => (
                <div key={index} className="flex gap-10">
                        <ul>
                        {item.idone.map((item , index)=>(
                            <li key={index} className=" text-secondary py-1  ">{item}</li>
                        ))}
                        </ul>
                        <ul>
                        {item.idtwo.map((item , index)=>(
                            <li key={index} className="text-white py-1  ">{item}</li>
                        ))}
                        </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Specification;
