const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `profile-pic-${uniqueSuffix}${fileExtension}`);
  },
});

// Multer file filter
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [".jpg", ".jpeg", ".png"];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (allowedFileTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png files are allowed."));
  }
};

// Multer upload instance
const upload = multer({ storage, fileFilter }).single("profilePic");
module.exports = upload;
