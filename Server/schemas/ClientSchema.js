import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
  profession: (String = "Pharmacien" | "Grossiste" | "Medecin"),
  etablissemnt: String,
  region: String,
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
