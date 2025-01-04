const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const MongoDB = require("./Config/config");
const blogRoute = require("./Routes/BlogRoute");
const adminRoute = require("./Routes/AdminRoute");
const authRouter = require("./Routes/Auth.Router");
const contactRoute = require("./Routes/Contact.Router");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const port = 5000;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());

MongoDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRoute);
app.use("/api", contactRoute);
app.use("/api/blogs", blogRoute);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
