import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(
    //  "mongodb+srv://devanandutkarsh7:asdq3eq1dq@Cluster0.mongodb.net/portt?retryWrites=true&w=majority",
 "mongodb+srv://devanandutkarsh7:s44jzKTIbX32jtY8@cluster0.gsrfr.mongodb.net/contact?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("MongoDB connected");
};

export default connectMongo;
//  devanandutkarsh7 devanandutkarsh7 asdq3eq1dq