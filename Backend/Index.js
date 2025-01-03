const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const MongoDB = require("./Config/config");
const authRouter = require("./Routes/Auth.Router");
const contactRoute = require("./Routes/Contact.Router");
const protectRoute = require("./Authmiddleware/authMiddleware");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
MongoDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/auth", authRouter);
app.use("/api", protectRoute, contactRoute);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
