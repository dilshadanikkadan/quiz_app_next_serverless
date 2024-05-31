import { QuizModel } from "@/lib/models/quiz";
import { QuestionModel } from "@/lib/models/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("GET request received");
  return NextResponse.json({ message: "User login endpoint" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    const { questions, quizId } = body
    const newQuestion = await QuestionModel.insertMany(questions);
    const ids = newQuestion?.map((item) => item?._id);
    await QuizModel.findByIdAndUpdate(quizId, {
      $push: { questions: { $each: ids } },
    });
    return NextResponse.json({ payload: newQuestion });
  } catch (error) {
    console.log(error);
  }
}
