import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const {db} = await connectToDatabase();
      const { body } = req;
      const { title, url, imageUrl, password, description } = body;
      if(password == process.env.PASSWORD){
          const data = { title, url, imageUrl, description };
          await db.collection("blog_types").insertOne(data);
          res.send({ sucess: "Added blog type Successfully"});
        }else{
           res.send({ sucess: "Something went Wrong"});
        }
    } catch (error) {
      const response = {
        error: "300",
        message: "Something went Wrong",
      };
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
