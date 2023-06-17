import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniqe = Date.now();
    cb(null,file.fieldname + '-' + uniqe)
  },
});

const upload = multer({storage:storage}).single('image')

export default {
    upload
}