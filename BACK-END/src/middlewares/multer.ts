import multer from "multer"

// donde se van almacenar
let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, `${__dirname}/../uploads`)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now}-${file.originalname}`)
    }
})

// configuracion del multer
const upload = multer({storage: storage})



export default upload