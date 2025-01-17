// import connectMongo from "../lib/mongodb";
// import User from "../models/User";
// import multer from "multer";
// import fs from "fs";
// import { promisify } from "util";

// const uploadDir = "./public/uploads";

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer setup for multiple files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });
// const uploadMiddleware = promisify(
//   upload.fields([
//     { name: "image1", maxCount: 1 },
//     { name: "skill_Image", maxCount: 1 },
//     { name: "certificates_image", maxCount: 1 },
//     { name: "project_Image", maxCount: 1 },
//   ])
// );

// export default async function handler(req, res) {
//   await connectMongo();
//   if (req.method === "POST") {
//     try {
//       // File handling
//       await uploadMiddleware(req, res);

//       const {
//         name,
//         bio,
//         links, // Update for links array
//         skill_Name,
//         skill_Specific_Name,
//         project_name,
//         contact_link,
//         project_link,
//         contact_name,
//         contact_email,
//       } = req.body;

//       // Create user with image paths or null if no file uploaded
//       const user = await User.create({
//         image1: req.files.image1?.[0]?.path || null,
//         skills: [
//           {
//             skill_Image: req.files.skill_Image?.[0]?.path || null,
//             skill_Name,
//             skill_Specific_Name,
//           },
//         ],
//         certificates_image: req.files.certificates_image?.[0]?.path || null,
//         projects: [
//           {
//             project_Image: req.files.project_Image?.[0]?.path || null,
//             project_name,
//             project_bio: req.body.project_bio, // Add project_bio
//             project_link,
//           },
//         ],
//         name,
//         bio,
//         links, // Store the links array directly
//         contact: {
//           contact_link,
//           contact_name,
//           contact_email,
//         },
//       });

//       return res.status(201).json({ success: true, data: user });
//     } catch (error) {
//       return res.status(400).json({ success: false, error: error.message });
//     }
//   } else if (req.method === "GET") {
//     try {
//       const users = await User.find({});
//       return res.status(200).json({ success: true, data: users });
//     } catch (error) {
//       return res.status(400).json({ success: false, error: error.message });
//     }
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

// export const config = {
//   api: {
//     bodyParser: false, // Make sure to disable body parser for file uploads
//   },
// };













import connectMongo from "./connectMongo";
import User from "../../../public/models/User";
import multer from "multer";
import fs from "fs";
import { promisify } from "util";
import cors from "cors";

const uploadDir = "./public/uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup for multiple files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file,  cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const uploadMiddleware = promisify(
  upload.fields([
    { name: "image1", maxCount: 1 },
   
  ])
);

// Configure CORS
const corsOptions = {
  origin: "*", // Allow requests from any origin. Change "*" to specific domains for stricter security.
  methods: ["GET", "POST"], // Allowed methods.
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers.
};

const corsMiddleware = promisify(cors(corsOptions));

export default async function handler(req, res) {
  await connectMongo();

  // Apply CORS middleware
  await corsMiddleware(req, res);

  if (req.method === "POST") {
    try {
      // File handling
      await uploadMiddleware(req, res);

      const {
        name,
        bio,
       
      } = req.body;

      // Create user with image paths or null if no file uploaded
      const user = await User.create({
        image1: req.files.image1?.[0]?.path.replace('public',"") || null,
       
        name,
        bio,
      
      });

      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find({});
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false, // Make sure to disable body parser for file uploads
  },
};