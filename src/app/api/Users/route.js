import User from "@/app/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await User.find();
    //console.log(users);
    return Response.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    console.log(userData)
    await User.create(userData);

    return NextResponse.json({ message: "user Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
