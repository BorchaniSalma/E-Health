import mongoose from "mongoose";

const IneasSchema = mongoose.Schema({
  ListeMaladies: [String],
});

const Ineas = mongoose.model("Ineas", IneasSchema);
export default Ineas;
