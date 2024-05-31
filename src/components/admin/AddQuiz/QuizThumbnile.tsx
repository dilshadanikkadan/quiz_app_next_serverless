"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageUplaod } from "@/services/cloudinary/upload";
import { useMutation } from "@tanstack/react-query";
import { saveQuiz } from "@/services/api/quizApi";
import { useDispatch } from "react-redux";
import { quizCreated } from "@/store/slices/quiz";

const QuizThumbnile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 
  const dispatch = useDispatch();
  const { mutate: savedMutate } = useMutation({
    mutationFn: saveQuiz,
    onSuccess: (data) => {
      console.log(data);
      setLoading(false);
      setImage(null);
      setTitle(""); 
      dispatch(quizCreated(data));
    },
  });

  const handleClick = async () => {
    setLoading(true); 
    if (!image) {
      setLoading(false);
      return setError("Please upload an image");
    }
    const savedImage = await ImageUplaod(image);
    savedMutate({
      thumbnail: savedImage,
      title,
    });
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result as string;
        setImage(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" h-[90vh]">
      <h3 className="text-center font-primary text-yellow font-semibold text-2xl mt-10 ">
        Add Quiz Thumbnail
      </h3>
      <div className="form w-[60%]  mx-auto  h-full mt-7">
        {error && <p className="text-start  text-red-500 ml-3 mb-3">{error}</p>}

        <div className="thumbnile border-2  flex items-center justify-center border-dotted border-[#FDB101] h-36 w-full rounded-lg">
          {image ? (
            <img src={image} width={200} />
          ) : (
            <label className="form-control w-full max-w-xs">
              <input
                onChange={handleImage}
                type="file"
                className="file-input text-yellow file-input-bordered w-full max-w-[15rem]"
              />
            </label>
          )}
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="input input-bordered border border-[#FDB101] w-full max-w-md mt-5"
        />

        <div className="w-full flex justify-end ">
          <button
            onClick={handleClick}
            className="bg-[#FDB101] py-3 mt-10 w-[40%] text-white rounded-lg hover:text-yellow hover:bg-white hover:border hover:border-[#FDB101]"
          >
            {loading ? "Adding" : "Add Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizThumbnile;
