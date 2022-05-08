import { connectToDatabase } from "../../middleware/ConnectMongo";
var crypto = require('crypto');

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const { db } = await connectToDatabase();
      const { body } = req;
      const { name, email, phone_number, password } = body;
      let sucess = false;
      let info = [1];
      const result = await db.collection("user_details").find({ email }).toArray();
      if(result.length === 0){
          const hash = crypto.pbkdf2Sync(password, process.env.SALT, 1000, 64, `sha512`).toString(`hex`);
          const data = { name, email, phone_number, hash };
          info[0] = data;
          sucess = true;
          await db.collection("user_details").insertOne(data);
          res.send(JSON.stringify({ sucess: true, message: "Account created sucessfully",Api_key:hash,name }));
      }else{
        res.send(JSON.stringify({ sucess: false, message: "Account already exists." }));
      }

   } catch (error) {
      const response = {
        sucess: false,
        error: "300",
        message: "Something went wrong. Try again later",
      };
      res.send(JSON.stringify(response));
      return;
    }
  } else {
    const response = {
      sucess: false,
      error: "404",
      message: "No such file or directory",
    };
    res.send(JSON.stringify(response));
    return;
  }
};
