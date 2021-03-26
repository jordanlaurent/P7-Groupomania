const multer = require('multer');

// const MIME_TYPES = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpg',
//     'image/gif': 'gif',
//     'image/png': 'png',
// };

// const storage = multer.diskStorage({
//     limits: {
//         fileSize: 4000000, //4Mo
//       },
//     destination: (req, file, callback) => {
//         callback(null, '/images');
//     },
//     filename: (req, file, callback) => {
// 		const name = file.originalname.split(' ').join('_');
// 		const extension = MIME_TYPES[file.mimetype];
// 		callback(null, name + Date.now() + '.' + extension);
// 	},
// });

// module.exports = multer({ storage: storage }).single('image');

const storage = multer.diskStorage({
  //endroit où l'image uploadée est stockée
      destination: (req, file, cback) => {
          cback(null, 'images')
      },
  //nom donné au fichier lors du stockage 
      filename: (req, file, cback) => {
          const name = file.originalname.toLowerCase().split(' ').join('-');
          //const extension = MIME_TYPES[file.mimetype];
          cback(null, name);
      }
  });
  
  module.exports = multer({ storage: storage }).single('image');