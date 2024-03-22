import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongo db");
  } catch (error) {
    console.log("Error connecting to mongodb", error.message);
  }
};
export default connectToMongoDB;
