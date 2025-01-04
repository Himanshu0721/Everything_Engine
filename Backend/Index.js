const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const MongoDB = require("./Config/config");
const multer = require("multer");
const authRouter = require("./Routes/Auth.Router");
const contactRoute = require("./Routes/Contact.Router");
const protectRoute = require("./Authmiddleware/authMiddleware");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
MongoDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });

app.post("/single", uploads.single("images"), (req, res) => {
  try {
    console.log(req.file); //undefined
    res.send("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/auth", authRouter);
app.use("/api", protectRoute, contactRoute);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
