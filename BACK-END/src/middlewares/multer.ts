import multer from "multer"

///donde se almacenan

let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `${__dirname}/../uploads`)
    },
    filename: (req,file,cb)=>{
        cb(null, `${Date.now}-${file.originalname}`)
    }
})

//configuracion

const upload = multer({storage})
export default upload