import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  image1: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  links: { type: [String], required: true }, // Using an array for multiple links
  skills: [{
    skill_Image: { type: String, required: true },
    skill_Name: { type: String, required: true },
    skill_Specific_Name: { type: String, required: true },
  }],
  certificates_image: { type: String, required: true },
  projects: [{
    project_Image: { type: String, required: true },
    project_name: { type: String, required: true },
    project_bio: { type: String, required: true },
    project_link: { type: String, required: true },
  }],
  contact: {
    contact_link: { type: String, required: true },
    contact_name: { type: String, required: true },
    contact_email: { type: String, required: true },
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
