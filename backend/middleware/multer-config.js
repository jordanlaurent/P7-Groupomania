const multer = require('multer');

const storage = multer.diskStorage({
    limits: {
                fileSize: 4000000, //4Mo
              },
  //endroit où l'image uploadée est stockée
      destination: (req, file, cback) => {
          cback(null, 'images')
      },
  //nom donné au fichier lors du stockage 
      filename: (req, file, cback) => {
          const name = file.originalname.toLowerCase().split(' ').join('-');
          //const extension = MIME_TYPES[file.mimetype];
          cback(null, file.fieldname + '-' + Date.now());
      }
  });
  
  module.exports = multer({ storage: storage }).single('image');