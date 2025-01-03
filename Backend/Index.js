const express = require("express");
const app = express();
const MongoDB = require("./Config/config");
const multer = require("multer");
const authRouter = require("./Routes/Auth.Router");
const dotenv = require("dotenv");

dotenv.config();

const port = 5000;
app.use(express.json());
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

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
