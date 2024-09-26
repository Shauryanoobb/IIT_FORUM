import Comment from "@/app/models/comments";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const Comments = await Comment.find();
    //console.log(Comments);
    return Response.json(Comments);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const CommentData = body.formData;

    await Comment.create(CommentData);

    return NextResponse.json({ message: "Comment Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}