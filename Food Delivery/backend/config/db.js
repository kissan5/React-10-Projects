import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hitclad:mancity@cluster0.kjy9qoj.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
