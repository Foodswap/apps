const multer = require('multer');

  const MIME_TYPES = {
      'image/jpg': 'jpg',
      'image/jpeg': 'jpg',
      'image/png': 'png'
    };
    
    const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, '/home/etudiant/Bureau/Utilisateur');
      },
      filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, /*name + Date.now()*/ 'test' + '.' + extension);
      }
    });
    


module.exports = multer({storage: storage}).single('image');