const express = require("express");
const app = express();
const MongoDB = require("./Config/config");
const authRouter = require("./Routes/Auth.Router");
const dotenv = require("dotenv");

dotenv.config();

const port = 5000;
app.use(express.json());
MongoDB();

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/auth", authRouter);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
