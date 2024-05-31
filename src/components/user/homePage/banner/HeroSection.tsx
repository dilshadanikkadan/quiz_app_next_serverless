import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[80vh] mt-12 ">
      <div className="imageWrapper w-[80%] relative h-full  object-cover m-auto bg-red-200">
        <Image src="/heroImage.PNG" alt="My Image" objectFit="cover" fill />
      </div>
    </div>
  );
};

export default HeroSection;
