import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const blogs_types = await db.collection("blog_types").find().toArray();
    res.send(JSON.stringify({ sucess: "True", data: blogs_types }));
  } catch (error) {
    res.send(JSON.stringify({ sucess: "False" }));
  }
};
