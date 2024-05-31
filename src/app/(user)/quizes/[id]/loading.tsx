import React from "react";

const loading = () => {
  return (
    <div className="w-[80%] mx-auto h-[80vh]">
      <div className="w-[80%] mx-auto flex items-end justify-end relative top-[5%] mr-[15%]">
        <div className="flex flex-col flex-wrap gap-4 w-[80%]">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
