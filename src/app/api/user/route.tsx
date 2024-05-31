import { QuizModel } from "@/lib/models/quiz";
import { UserModel } from "@/lib/models/userModel";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, quizData} = body;
    console.log(quizData);
    const saved = await UserModel.findByIdAndUpdate(userId, {
      $push: { playedQuiz: quizData },
    });
    return NextResponse.json({ saved });
  } catch (error) {}
}

export async function GET(request: NextRequest) {
  try {
    console.log(" hey dilshad how old are u ");
    const payload = await UserModel.findOne();
    
    return NextResponse.json({ payload });
  } catch (error) {

  }
}
