"use client";
import { UseQuiz } from "@/hooks/UseQuiz";
import { saveAnswer } from "@/services/api/quizApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  options: Option[];
}

const QuizQuestion: React.FC = () => {
  const quizData = UseQuiz();
  const router = useRouter();
const {data:quizStored} = useSelector((state:any)=> state.quiz);
console.log("strored",quizStored);

   const [error, setError] = useState<string | null>("");

  const [questions, setQuestions] = useState<Question[]>([
    {
      questionText: "",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  ]);
  const validateQuestions = () => {
    for (const question of questions) {
      if (question.questionText.trim() === "") {
        return "Question text cannot be empty.";
      }

      const correctOptions = question.options.filter(
        (option) => option.isCorrect
      );
      if (correctOptions.length === 0) {
        return "Each question must have at least one correct option.";
      }

      for (const option of question.options) {
        if (option.text.trim() === "") {
          return "Option text cannot be empty.";
        }
      }
    }

    return ""; 
  };

  const { mutate: savedMutate } = useMutation({
    mutationFn: saveAnswer,
    onSuccess: (data) => {
      //   titleRef.current =""
      router.replace('/admin/addquiz/success')
      console.log("my data ", data);
    },
  });

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (
    qIndex: number,
    oIndex: number,
    value: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex].text = value;
    setQuestions(newQuestions);
  };

  const handleIsCorrectChange = (qIndex: number, oIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options = newQuestions[qIndex].options.map(
      (option, index) => ({
        ...option,
        isCorrect: index === oIndex,
      })
    );
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
    ]);
  };

  const saveQuestions = () => {
    console.log(questions);
    const validationError = validateQuestions();
    if (validationError) {
      return setError(validationError);
    }
    // savedMutate(questions);
    savedMutate({
      questions,
      quizId: quizData.payload?._id,
    });
  };

  return (
    <>

    <div className="h-[70vh]  overflow-y-scroll">
      <h3 className="text-center font-primary text-gray-700 font-semibold text-2xl mt-10">
        Add Question
      </h3>
      <div className="form w-[60%] mx-auto h-full mt-10">
      {error && <p className="text-start  text-red-500 ml-3 mb-3">{error}</p>}
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-10">
            <input
              type="text"
              placeholder="Type question here"
              value={question.questionText}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              className="input input-bordered w-full max-w-md mb-4 border border-[#FDB101]"
            />
            <div className="w-full items-center justify-center flex flex-wrap gap-5">
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex flex-col items-center">
                  <input
                    type="text"
                    placeholder={`Option ${oIndex + 1}`}
                    value={option.text}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                    className="input input-bordered w-full max-w-[11.5rem] border border-[#FDB101]"
                  />
                  <label className="flex items-center mt-2">
                    <input
                      type="radio"
                      name={`isCorrect-${qIndex}`}
                      checked={option.isCorrect}
                      onChange={() => handleIsCorrectChange(qIndex, oIndex)}
                    />
                    <span className="ml-2">Correct</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full flex justify-between mt-10">
          <button
            onClick={addQuestion}
            className="bg-[#FDB101] py-3 w-[40%] text-white rounded-lg hover:text-yellow hover:bg-white hover:border hover:border-[#FDB101]"
          >
            Add Question
          </button>
          <button
            onClick={saveQuestions}
            className="bg-gray-700 py-3 w-[40%] text-white rounded-lg hover:text-gray-700 hover:bg-white hover:border hover:border-gray-700"
          >
            Save Questions
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default QuizQuestion;
