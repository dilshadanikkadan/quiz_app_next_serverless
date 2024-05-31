import { dbConnect } from "@/lib/dataBase/connection";
import { QuizModel } from "@/lib/models/quiz";
import { QuestionModel } from "@/lib/models/question";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
dbConnect();
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").at(-1);
    console.log(id);

    const payload = await QuizModel.findById(id).populate({
      path: "questions",
      model: QuestionModel,
    });
    if (!payload) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
    }

    return NextResponse.json({ payload });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, {params}: any) {
  try {
    const { id } = params;
    console.log("id here ",id);
    
    const deleteQuery = await QuizModel.findByIdAndDelete(id);
   
    return NextResponse.json("successfully deleted!!");
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
