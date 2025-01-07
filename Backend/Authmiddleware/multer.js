const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadsDir = path.join(__dirname, "../uploads");
console.log("Uploads directory:", uploadsDir);

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

/* This is not working */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

console.log(storage.destination);
console.log(storage.filename);

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, //
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed."));
    }
  },
});

module.exports = upload;
