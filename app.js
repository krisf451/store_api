require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res, next) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    //connectDB
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
