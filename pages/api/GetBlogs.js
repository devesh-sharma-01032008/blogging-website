import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const popular_blogs = await db.collection("blogs").find().toArray();
    res.send(JSON.stringify({ sucess: "True", data: popular_blogs }));
  } catch (error) {
    res.send(JSON.stringify({ sucess: "False" }));
  }
};
