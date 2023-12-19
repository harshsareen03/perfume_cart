import mongoose from "mongoose";

const username = "harshsareen03";
const password = "ProfileHarsh";
const cluster = "perfumeshop.x7pjaaa.mongodb.net";
const database = "perfume";

const uri = `mongodb+srv://harshsareen03:IUXxg8Lqtivl323K@perfumeshop.x7pjaaa.mongodb.net/perfume`;
const connectDB = async () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
      // Your code here
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};

export default connectDB;
