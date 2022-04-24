import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const db = connectToDatabase();
      const { body } = req;
      const { name, email, phone_number, password } = body;
      const data = { name, email, phone_number, password };
      await db.collection("user_details").insertOne(data);
      res.send({ sucess: "Login Successfully", Api_key: "luck" });
    } catch (error) {
      const response = {
        error: "300",
        message: "Something went Wrong",
      };
      res.send(response.json());
    }
  } else {
    const response = {
      error: "404",
      message: "Wrong method",
    };
    res.send(response.json());
  }
};
