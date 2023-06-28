
// import multer from 'multer';
// import path from 'path';


// // Settings
// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         cb(null, uuid() + path.extname(file.originalname))
//     }
// });
// export default multer({storage});

// function uuid() {
//     throw new Error('Function not implemented.');
// }





// import multer from "multer"
// import { Path } from "mongoose"
// import express from "express";
// const { MongoClient } = require('mongodb');
// const cors = require("cors");
// const path = require('path')
// const app = express();

// donde se van almacenar
// let storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
      
//         cb(null, path.join(__dirname, '../uploads'))
//     },
//     filename: (req, file, cb)=>{
  
//         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
//         cb(null, `${file.fieldname}-${uniqueSuffix}`);
//     }
// })


// const upload = multer({storage})


// const storage = multer.diskStorage({
//     filename: function (res, file, cb) {
//       const ext = file.originalname.split(".").pop(); //TODO pdf / jpeg / mp3
//       const fileName = Date.now(); //TODO 12312321321
//       cb(null, `${fileName}.${ext}`); //TODO 123123213232.pdf
//     },
//     destination: function (res, file, cb) {
//       cb(null, `./public`);
//     },
//   });
  
//   const upload = multer({ storage });

//   app.post("/upload", upload.single("myFile"), (req, res) => {
//     const file = req.file.filename;
//     console.log(file)
//     res.send({ data: "OK", url: `http://localhost:3000/${file}` });
//   });


// export default upload