const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const MongoDB = require("./Config/config");
const blogRoute = require("./Routes/BlogRoute");
const adminRoute = require("./Routes/AdminRoute");
const authRouter = require("./Routes/Auth.Router");
const getUserRoute = require("./Routes/Auth.Router");
const contactRoute = require("./Routes/Contact.Router");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());

MongoDB(process.env.MongoUrl);

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRoute);
app.use("/api", contactRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/auth", getUserRoute);

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
