import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // image1: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String, required: true },
 
});

export default mongoose.models.User || mongoose.model("User", UserSchema);