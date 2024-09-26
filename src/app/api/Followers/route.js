import Follower from "@/app/models/followers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const followers = await Follower.find();
    //console.log(followers);
    return Response.json(followers);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const followerData = body.formData;

    await Follower.create(followerData);

    return NextResponse.json({ message: "follower Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}