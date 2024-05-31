import { QuizModel } from "@/lib/models/quiz";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function GET(request: NextRequest) {
  try {
    console.log(" hey dilshad how old are u ");
    const payload = await QuizModel.find();
    
    return NextResponse.json({ payload });
  } catch (error) {

  }
}


export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {
  try {
    const { id } = params;
    console.log("id here ",params);
    
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
