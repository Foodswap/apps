const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, process.env.PATH_PICTURE);
  },
  filename: (req, file, callback) => {
    const extension = MIME_TYPES[file.mimetype];
    const filename = req.params.id
      ? `dish_cover_${req.params.id}.${extension}`
      : `dish_cover_${uuidv4()}.${extension}`;
    callback(null, filename);
  },
});

module.exports = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file) {
      cb(null, true);
    }

    cb(null, true);
  },
}).single('picture');
