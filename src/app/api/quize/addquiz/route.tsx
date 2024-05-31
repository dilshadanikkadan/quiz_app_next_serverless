import { QuizModel } from "@/lib/models/quiz";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("GET request received");
  return NextResponse.json({ message: "User login endpoint" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, thumbnail } = body;
  const newQuiz = new QuizModel({ title, thumbnail });
  await newQuiz.save();
  return NextResponse.json({ payload: newQuiz });
}
