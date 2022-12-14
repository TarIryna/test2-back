const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const productsRouter = require("./routes/products");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/", (req, res) => {
  res.end(`
  <div>Test by Tar Iryna</div>
  `);
});
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
