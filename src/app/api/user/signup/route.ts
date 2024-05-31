import { dbConnect } from "@/lib/dataBase/connection";
import { UserModel } from "@/lib/models/userModel";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

dbConnect();
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const { email, password, username } = body;
    const newUser = new UserModel({ username, email, password ,playedQuiz:[]});
    await newUser.save();
    return NextResponse.json({ payload: newUser });
  } catch (error) {}
}
