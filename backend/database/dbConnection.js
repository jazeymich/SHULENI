import mongoose from 'mongoose';

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "SHULENI",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("Error occured while connecting to database");
    });
};
