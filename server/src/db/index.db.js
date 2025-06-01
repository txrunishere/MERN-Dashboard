import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongooseConnectionInstence = await mongoose.connect(process.env.MONGO_URL);
    if (mongooseConnectionInstence) {
      console.log(
        "MongoDB connected successfully",
        mongooseConnectionInstence.connection.host,
        mongooseConnectionInstence.connection.name
      );
    }
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

export default connectDB;