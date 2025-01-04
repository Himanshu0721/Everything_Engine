const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const MongoDB = require("./Config/config");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const authRouter = require("./Routes/Auth.Router");
const contactRoute = require("./Routes/Contact.Router");
const protectRoute = require("./Authmiddleware/authMiddleware");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
MongoDB();

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

app.use("/uploads", express.static(uploadDir));

app.post("/single-file", upload.single("file"), (req, res) => {
  try {
    console.log("Headers:", req.headers);
    console.log("Uploaded file", req.file);
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    res
      .status(200)
      .send({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error uploading file.");
  }
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/auth", authRouter);
app.use("/api", protectRoute, contactRoute);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
