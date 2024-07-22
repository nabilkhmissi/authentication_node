const multer = require("multer");

const setDestinationUserImage = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, "./src/static/images");

    }
}
const setDestinationVisiteImage = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, "./src/static/visite_Images");

    }
}
const setFileName = (req, file, cb) => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    cb(null, formattedDate + "--" + file.originalname);
}

const storageUserImage = multer.diskStorage({
    destination: setDestinationUserImage ,
    filename: setFileName
});
const storageVisiteImage = multer.diskStorage({
    destination: setDestinationVisiteImage ,
    filename: setFileName
});

uploadUserImage = multer({
    storage: storageUserImage
  });

uploadVisiteImage = multer({
    storage: storageVisiteImage
  });

module.exports = { uploadUserImage, uploadVisiteImage }