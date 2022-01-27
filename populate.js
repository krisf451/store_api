require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_MONGODB);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!!!");
  } catch (err) {
    console.log(err);
  }
};

start();
