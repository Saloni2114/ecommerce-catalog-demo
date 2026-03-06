import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null },

    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],

    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);