"use client";
import QuizCard from "@/components/user/homePage/QuizList/QuizCard";
import { dbConnect } from "@/lib/dataBase/connection";
import { QuizModel } from "@/lib/models/quiz";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import { useQuery } from "@tanstack/react-query";
import { getAllQuiz } from "@/services/api/quizApi";

const ListQuiz = () => {
  const { data: quizData } = useQuery({
    queryFn: getAllQuiz,
    queryKey: ["quizzes"],
  });
  console.log("my quizData",quizData);
  
  return (
    <div className="w-full  mt-12">
      <div className="title w-[20%] py-3 rounded-md mx-auto ">
        <h3 className="font-secondary  font-bold text-3xl text-center text-gray-800">
          Quizes
        </h3>
      </div>
      <div className="cardWrapper w-[80%] mx-auto mt-7 flex flex-wrap gap-12 ">
        {quizData?.payload?.map((item: any, i: any) => (
          <div key={i}>
            <DeleteBtn id={item?._id} />
            <QuizCard quizData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListQuiz;
