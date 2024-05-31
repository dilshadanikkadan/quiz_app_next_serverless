import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="flex w-full h-[90vh] ">
      <div className="left flex-[1] flex flex-col items-center ">
        <div className="title h-[50%] mt-[10%] w-[60%] flex items-center ">
          <Image src="/title.png" alt="My Image" width={150} height={300} />
          <h3 className="font-bold text-8xl font-secondary  text-gray-900  ">
            Teen Quiz
          </h3>
        </div>
        <button className="bg-[#FDB101] py-3 mt-10 w-[20%] text-white rounded-lg hover:text-yellow hover:bg-white hover:border hover:border-[#FDB101]">
          Join now
        </button>
      </div>
      <div className="right flex-[1]  relative">
        <div className="absolute inset-0">
          <Image
            src="/mainBanner.png"
            alt="My Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
