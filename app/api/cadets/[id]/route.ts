import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Cadet from "@/models/cadet";

export const GET = async (req: Request, res: Response) => {
  console.log("One GET");

  try {
    const id = req.url.split("cadets/")[1];
    console.log(id);
    await connectMongoDB();
    const cadet = await Cadet.findOne({ _id: id }).exec();
    return NextResponse.json({ cadet }, { status: 202 });
  } catch (err) {
    return NextResponse.json({ message: "Error, err" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  console.log("One Post");

  try {
    const id = req.url.split("cadets/")[1];
    console.log(id);
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
    return NextResponse.json({ message: "Error, err" }, { status: 500 });
  }
};
