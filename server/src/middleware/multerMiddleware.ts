import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from "express";

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        let fileDestination = 'public/uploads/';
        // cb(null, 'public/uploads/'); // Make sure this directory exists ()
        // lets make this automatically by our program for that lets check if this folder exists or not
        // check if directory exists or not
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true })
            //recursive true creates parent folder as well as sub-folder
            // if not error then null comes then fileDestination
            cb(null, fileDestination)
        } else {
            // below code means if directory already exists then directly file is uploaded
            cb(null, fileDestination)
        }
    },
    filename: (req, file, cb) => {
        // Combines Date.now() and a random number to ensure uniqueness.
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        // below code reads extension of the original file
        const ext = path.extname(file.originalname);
        // The final filename format: [fieldname]-[uniqueSuffix].[ext] (e.g., image-1623456789123-123456789.jpg).
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Ensures only image files (jpeg, jpg, png, gif) are accepted.
// Checks:
// File extension (e.g., .jpg).
// MIME type (e.g., image/jpeg).
// If both checks pass, the file is accepted (cb(null, true)).
// If not, an error is thrown (cb(new Error(...))).
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images Only!'));
    }
};

// storage: Uses the previously defined diskStorage configuration.
// limits: Restricts file size to 5MB (prevents large uploads).
// fileFilter: Applies the fileFilter function to validate file types.

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: fileFilter
});


export default upload;


