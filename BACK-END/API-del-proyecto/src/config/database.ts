import mongoose from "mongoose";

const dataBase = async () => {
    try {
        await mongoose.connect(<string>process.env.DB_URI)
        console.log("Successfully connected to the database 🚀");
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`);
    }
}

export default dataBase;