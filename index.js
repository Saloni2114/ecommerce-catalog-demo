import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import categoryRoutes from "./src/routes/categoryRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("E-commerce API running"));

// Always connect (cached on Vercel)
await connectDB();

// ✅ If running on Vercel, DO NOT listen. Just export app.
// ✅ If running locally, listen.
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;