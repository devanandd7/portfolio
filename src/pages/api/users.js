
import connectMongo from "./connectMongo";
import User from "../../../public/models/User";
import cors from "cors";
import { promisify } from "util";

// Configure CORS
const corsOptions = {
  origin: "*", // Allow all origins (for development). Change this in production.
  methods: ["GET", "POST"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

const corsMiddleware = promisify(cors(corsOptions));

export default async function handler(req, res) {
  await connectMongo();
  await corsMiddleware(req, res); // Apply CORS

  if (req.method === "POST") {
    try {
      const { name, bio } = req.body;

      if (!name || !bio) {
        return res.status(400).json({ success: false, error: "Name and bio are required" });
      }

      const user = await User.create({ name, bio });

      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } 
  
  else if (req.method === "GET") {
    try {
      const users = await User.find({});
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } 
  
  else {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
