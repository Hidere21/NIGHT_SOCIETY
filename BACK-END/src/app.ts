import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import dataBase from "./config/database";
import apiRoutes from "./routes/index"
import multer, { Multer } from 'multer';
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../uploads`); // Ruta donde se guardarán los archivos subidos
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
  });

const upload: Multer = multer({ storage });

// Rutas
app.use("/api", apiRoutes);


// Base de datos
dataBase();

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});