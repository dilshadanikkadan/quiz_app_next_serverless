import React from "react";
import QuizCard from "./QuizCard";
import { GetStaticProps } from "next";
import { getAllQuiz } from "@/services/api/quizApi";
import { dbConnect } from "@/lib/dataBase/connection";
import { QuizModel } from "@/lib/models/quiz";

const QuizList = async () => {
    await dbConnect();
    const quizData = await QuizModel.find();
    return (
      <div className="w-full  mt-12">
        <div className="title w-[20%] py-3 rounded-md mx-auto bg-[#F61B7D] ">
          <h3 className="font-secondary  font-bold text-3xl text-center text-gray-800">
            Quizes
          </h3>
        </div>
        <div className="cardWrapper w-[80%] mx-auto mt-7 flex flex-wrap gap-12 ">
          {quizData?.map((item, i) => (
            <div key={i}>
              <QuizCard quizData={item} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default QuizList;
