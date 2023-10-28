const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database successfully`))
  .catch((err) => console.log(`Error : ${err}`));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/images", express.static("images"));

app.use("/api", require("./routes/postRoute"));

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
