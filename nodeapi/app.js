const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");

dotenv.config();

// db
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("✅ DB Connected"));
const PORT = process.env.PORT || 8888;

// bring in routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ A Node JS API is listening on port: ${PORT}`);
});
