"use client";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { dbConnect } from "@/lib/dataBase/connection";
import { getAllQuiz, getCurrentuser } from "@/services/api/quizApi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const QuizCard = (data: any) => {
  const item = data.quizData;
  const user = useSelector((state: any) => state.user?.data);
  const { data: currentUser } = useQuery({
    queryFn: getCurrentuser,
    queryKey: ["user", user?._id],
  });
  console.log("my user", currentUser);
  const isPlayed = currentUser?.payload.playedQuiz
    .map((x: any) => x.id)
    .includes(item?._id);
  console.log("is [played", isPlayed);

  return (
    <div className="card w-[32rem] h-[60vh] mt-6">
      <div className="imageContainer w-full h-[60%] relative">
        <Image src={item?.thumbnail} alt="My Image" objectFit="cover" fill />
      </div>
      <div className="desc font-primary  mt-6">
        <p>{item?.title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          cupiditate sed quaerat{" "}
        </p>
        {isPlayed ? (
          <button className="bg-[#FDB101] py-3 mt-4 w-[23%] text-white rounded-3xl hover:text-yellow hover:bg-white hover:border hover:border-[#FDB101]">
            completed
          </button>
        ) : (
          <div className="mt-6">
            <Link
              href={`quizes/${item?._id}`}
              className="bg-[#FDB101] py-4 mt-10 w-[50vw] px-7  text-white rounded-3xl hover:text-yellow hover:bg-white hover:border hover:border-[#FDB101]"
            >
              Play now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
