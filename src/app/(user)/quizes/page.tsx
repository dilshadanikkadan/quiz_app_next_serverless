import QuizCard from "@/components/user/homePage/QuizList/QuizCard";
import { dbConnect } from "@/lib/dataBase/connection";
import { QuizModel } from "@/lib/models/quiz";
import AnimateRender from "@/services/anmation/AnimateRender";
import { getAllQuiz } from "@/services/api/quizApi";

import React from "react";

const page = async () => {
  await dbConnect();
  const quizData = await QuizModel.find();

  return (
    <>
        <div className="flex flex-wrap w-[80%] mx-auto gap-9 ">
          {quizData?.map((item, i) => (
            <div key={i}>
              <QuizCard quizData={item} />
            </div>
          ))}
        </div>
    </>
  );
};

export default page;
