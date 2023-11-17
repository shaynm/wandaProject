const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const logger = require("./middlewares/logger");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

//
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const users = require("./routes/users");
const products = require("./routes/products");
const cart = require("./routes/cart");


app.use(express.json());
app.use(logger);
app.use(cors());


app.use("/api/", users);
app.use("/api/users", users);
app.use("/api/signUp", signUp);
app.use("/api/signIn", signIn);
app.use("/api/products", products);
app.use("/api/cart", cart);
app.use("/api/cart/delete-product", cart);

mongoose.connect(process.env.dataBase, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

app.listen(PORT, () => console.log("Server running on port", PORT));