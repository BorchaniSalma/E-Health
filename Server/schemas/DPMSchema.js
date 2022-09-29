import mongoose from "mongoose";
import User from "./UserSchema";

const DPMSchema = mongoose.Schema({
  responsable: User,
});

const DPM = mongoose.model("DPM", DPMSchema);
export default DPM;
