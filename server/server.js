import express from "express";
import cors from "cors";

import products from "../server/data/products.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use("/api/products", productRoutes);
connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
