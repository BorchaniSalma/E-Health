import mongoose from "mongoose";

const FournisseurSchema = mongoose.Schema({
  type: (String = "Pharmacie Centrale" | "Sephire" | "CNIP"),
  stock: Number,
});

const Fournisseur = mongoose.model("Fournisseur", FournisseurSchema);
export default Fournisseur;
