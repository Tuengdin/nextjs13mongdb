import mongoose, { Schema } from "mongoose";

const cadetSchema = new Schema(
  {
    id: String,
    login: String,
    level: Number,
    firstName: String,
    lastName: String,
    bhIn: Number,
    poolMonth: String,
    poolYear: String,
    email: String,
    blackholedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Cadet = mongoose.models.Cadet || mongoose.model("Cadet", cadetSchema);

export default Cadet;
