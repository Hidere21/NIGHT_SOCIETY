import express from "express";
import dotenv from "dotenv";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import dataBase from "./config/database";
import path from 'path'
import apiRoutes from "./routes/index";
import Event from "./models/event.model";
import eventRoutes from "./routes/event.routes";

const app = express();
dotenv.config();



const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.use("/api", apiRoutes);
app.use(express)

app.use('/api/eventos', eventRoutes);

// Base de datos
dataBase();

// app.use(express.static(path.join(__dirname, 'src/uploads')))
// app.use(require('./routes/event.routes'))



app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});


