const multer = require('multer');
const path = require('path');
const multerStorage = multer.diskStorage({
    destination: function (req, file, callback) {
    callback(null, path.join(__dirname,'../public/uploads'));
    },
    filename: function (req, file, callback) {
    callback(null, Date.now() + '_' + file.originalname);
    }
});

const multerSigleUpload = multer({ storage: multerStorage });
module.exports= multerSigleUpload;