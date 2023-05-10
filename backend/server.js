const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/BRT", require("./routes/routes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("listing");
});
