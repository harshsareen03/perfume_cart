import express from "express";
import cors from "cors";
// import userRoutes from './routes/userRoutes.js';
import userRoutes from './routes/userRoutes.js'
import products from "../server/data/products.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cookieParser from 'cookie-parser';
// import orderRoutes from './routes/orderRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
