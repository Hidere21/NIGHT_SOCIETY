import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./routes/user.routes";
import dataBase from "./config/database";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.use("/user", usersRouter);

// Base de datos
dataBase();

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});