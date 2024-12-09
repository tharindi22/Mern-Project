import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected Successfully")
    );

    mongoose.connection.on("error", (err) =>
      console.error("Database Connection Error:", err)
    );

    mongoose.connection.on("disconnected", () =>
      console.log("Database Disconnected")
    );

    await mongoose.connect(process.env.MONGODB_URI); // No additional options needed
    console.log("Mongoose connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process on failure
  }
};

export default connectDB;
