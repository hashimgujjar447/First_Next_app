import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
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

    if (!user.isVerified) {
      return NextResponse.json(
        { success: false, message: "Email not verified." },
        { status: 403 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 },
      );
    }

    // ✅ Successful login
    return NextResponse.json(
      { success: true, message: "Login successful.", redirectTo: "/" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
