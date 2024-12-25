import dbConnect from "../lib/mongodb";
import User from "../models/User";

dbConnect(); // Connect to the database

export default async function handler(req, res) {
  const { name } = req.query;

  if (req.method === "GET") {
    try {
      if (!name) {
        return res.status(400).json({ success: false, message: "Name is required" });
      }

      // Find user by name (case-insensitive search)
      const user = await User.findOne({ name: new RegExp(name, "i") });

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
