import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationCode,
      isVerified: false,
    });

    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `"Next App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Verification Code",
      html: `<h3>Your verification code is: <strong>${verificationCode}</strong></h3>`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully. Code sent via email.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
