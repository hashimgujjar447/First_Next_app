import { NextResponse } from "next/server";
import crypto from "crypto";
import connectDB from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expireTime = new Date(Date.now() + 1000 * 60 * 30); // 30 minutes

    user.resetToken = token;
    user.resetTokenExpire = expireTime;
    await user.save();

    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/users/reset-password?token=${token}`;

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
      subject: "Password Reset Request",
      html: `<h3>Click the link below to reset your password:</h3>
                <a href="${resetUrl}">${resetUrl}</a>
                <p>This link is valid for 30 minutes.</p>`,
    });

    return NextResponse.json({ message: "Reset link sent to email" });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
