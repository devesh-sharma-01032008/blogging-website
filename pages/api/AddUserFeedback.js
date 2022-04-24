import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const {db} = await connectToDatabase();
      const { body } = req;
      const {name,email, phone_number, feedback  } = body;
      console.log(name,email, phone_number, feedback)
      const data = { name,email, phone_number, feedback};
      console.log(data);
      await db.collection("feedbacks").insertOne(data);
      res.send({ sucess: "Sent sucessfully", Api_key: "luck" });
    } catch (error) {
      const response = {
        error: "300",
        message: "Something went Wrong",
      };
      console.log(error);
      res.send(JSON.stringify(response));
    }
  } else {
    const response = {
      error: "404",
      message: "Wrong method",
    };
    res.send(JSON.stringify(response));
  }
};
