"use client";
import { deleteQuiz } from "@/services/api/quizApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const DeleteBtn = ({ id }: any) => {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteQuiz,
    onSuccess: (data) => {
      queryClient.invalidateQueries("quizzes");
    },
  });

  const handleDelete = () => {
    deleteMutate(id);
    console.log("hey this is from delete");
    
  };
  return (
    <>
      <div
        onClick={handleDelete}
        className="title cursor-pointer w-[15%] py-2 rounded-md border-dashed border-2 border-red-500 "
      >
        <h3 className="font-secondary text-red-500 font-bold text-1xl text-center ">
          Delete
        </h3>
      </div>
    </>
  );
};

export default DeleteBtn;
