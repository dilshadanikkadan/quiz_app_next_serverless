"use client";
import { UseUser } from "@/hooks/UseUser";
import { getCurrentuser } from "@/services/api/quizApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage: React.FC = () => {
  const mockHistory = [
    { quiz: "Math Quiz", score: 80 },
    { quiz: "Science Quiz", score: 90 },
    { quiz: "History Quiz", score: 75 },
  ];
  const user = useSelector((state: any) => state.user?.data);
  const { data:currentUser } = useQuery({
    queryFn: getCurrentuser,
    queryKey: ["user", user?._id],
  });
console.log("my user",currentUser);

  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center ">
      <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email} </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Quiz History</h2>
          {currentUser?.payload.playedQuiz.map((quiz:any, index:any) => (
            <div key={index} className="flex justify-between">
              <p>{quiz?.quizName}</p>
              <p>{quiz.score} out of {quiz?.outOfScore}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
