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

export const POST = async (req: Request, res: Response) => {
  //   POST REQUEST to create a new Cadet
  try {
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
    await connectMongoDB();
    const cadets = await Cadet.create({
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
    return NextResponse.json({ message: "Cadet created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("id=")[1];

    await connectMongoDB();
    await Cadet.findByIdAndDelete(id);
    return NextResponse.json({ message: " Cadet deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
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
