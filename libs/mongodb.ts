import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected!!");
  } catch (err) {
    console.log(err);
  }
}
