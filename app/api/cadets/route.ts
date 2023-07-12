import connectMongoDB from "@/libs/mongodb";
import Cadet from "@/models/cadet";
import { NextResponse } from "next/server";

export const GET = async () => {
  // GET all Cadets
  try {
    await connectMongoDB();
    const cadets = await Cadet.find();
    return NextResponse.json({ cadets }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error, err" }, { status: 500 });
  }
};
