import React from "react";
import QuizThumbnile from "./QuizThumbnile";
import QuisQuestion from "./QuisQuestion";

const AddQuizWrapper = () => {
  return (
    <div className=" h-[85vh]  overflow-hidden">
      <div className="flex" >
         <div className="flex-[1] h-full">
            <QuizThumbnile/>
         </div>
         <div className="flex-[1]">
            <QuisQuestion/>
         </div>
      </div>
    </div>
  );
};

export default AddQuizWrapper;
