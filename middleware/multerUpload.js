import multer from 'multer';

const upload = ({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

const multerUploads = multer({upload})


export {multerUploads};