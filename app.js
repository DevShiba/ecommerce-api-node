require("express-async-errors");

// express
const express = require("express");
const app = express();

// database
const connectBD = require("./db/connect");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("e-commerce-api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectBD(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
