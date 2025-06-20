// app/api/auth/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, code } = await req.json();
    console.log("Verify request:", email, code);

    if (!email || !code) {
      return NextResponse.json(
        { success: false, message: "Email and code are required." },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 },
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { success: true, message: "Email is already verified." },
        { status: 200 },
      );
    }

    if (user.verificationCode !== code) {
      return NextResponse.json(
        { success: false, message: "Invalid verification code." },
        { status: 401 },
      );
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();

    return NextResponse.json(
      { success: true, message: "Email verified successfully." },
      { status: 200 },
    );
  } catch (err) {
    console.error("Verify error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 },
    );
  }
}
