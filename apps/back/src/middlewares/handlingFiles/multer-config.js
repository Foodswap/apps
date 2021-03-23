const multer = require('multer');

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png'
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, process.env.PATH_PICTURE);
	},
	filename: (req, file, callback) => {
		const extension = MIME_TYPES[file.mimetype];
		callback(null, Date.now() + Math.floor(Math.random() * 100) + '.' + extension);
	}
});

module.exports = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (!file) {
			cb(null, true);
		}

		cb(null, true);
	}
}).single('picture');
