import Question from "@/app/models/questions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const questions = await Question.find();
    //console.log(questions);
    return Response.json(questions);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    console.log("lol");
    const body = await req.json();
    console.log("problem");
    const questionData = body.formData;

    await Question.create(questionData);

    return NextResponse.json({ message: "question Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}