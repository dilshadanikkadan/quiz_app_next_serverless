import { QuizModel } from "@/lib/models/quiz";
import { UserModel } from "@/lib/models/userModel";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) return NextResponse.json("no id here");

    const payload = await UserModel.findById(id);

    return NextResponse.json({ payload });
  } catch (error) {
    console.log(error);
  }
}
