import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Mongo DB connected successfully")
    } catch (error) {
        console.log("Error connecting to Mongo DB: ", error.message)
    }
}

export default connectToMongodb;