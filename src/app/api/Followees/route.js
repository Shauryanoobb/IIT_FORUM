import Followee from "@/app/models/followees";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const followees = await Followee.find();
    return Response.json(followees);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const followeeData = body.formData;

    await Followee.create(followeeData);

    return NextResponse.json({ message: "followee Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}