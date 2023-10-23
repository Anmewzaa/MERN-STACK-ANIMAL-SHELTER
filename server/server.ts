const express = require("express");
const { request: Req } = require("express");
const { response: Res } = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req: typeof Req, res: typeof Res) => {
  res.json({ message: "Hello world" });
});

app.listen(3000);
