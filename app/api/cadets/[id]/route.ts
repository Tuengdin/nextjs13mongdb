import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Cadet from "@/models/cadet";

export const GET = async (req: Request) => {
  //   GET one post
  try {
    const id = req.url.split("id=")[1];

    await connectMongoDB();
    const cadet = await Cadet.findOne({ _id: id }).exec();
    return NextResponse.json({ cadet }, { status: 202 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }.err, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  //   POST REQUEST to update a new post

  try {
    const id = req.url.split("id=")[1];
    await connectMongoDB();
    const {
      login,
      level,
      firstName,
      lastName,
      bhIn,
      poolMonth,
      poolYear,
      email,
      blackholedAt,
    } = await req.json();
    // await connectMongoDB();
    await Cadet.findByIdAndUpdate(id, {
      login,
      level,
      firstName,
      lastName,
      bhIn,
      poolMonth,
      poolYear,
      email,
      blackholedAt,
    });
    return NextResponse.json({ message: "Cadet updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
