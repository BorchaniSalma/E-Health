import multer from "multer";
import {promisify} from  'util';
import uniqid from "uniqid";
import path from "path"
export const checkFileUpload = (req, res, next) => {

  // SET STORAGE
//   const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'images');
//   },
//   filename: function (req, file, cb) {

//       cb(null, uniqid("", path.extname(file.originalname)));
//   },
// });

const upload= promisify( multer( ).single('image'));
  upload(req, res, err => next());
};




