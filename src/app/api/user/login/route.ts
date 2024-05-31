import { dbConnect } from "@/lib/dataBase/connection";
import { UserModel } from "@/lib/models/userModel";
import { Password } from "@/services/password/password";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const { email, password } = body;
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return NextResponse.json({ message: "No user exists" }, { status: 400 });
    }

    const isMatch = await Password.compare(userExist.password, password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Password is not matching" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { userExist },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
 