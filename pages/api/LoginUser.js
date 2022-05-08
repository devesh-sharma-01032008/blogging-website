import { connectToDatabase } from "../../middleware/ConnectMongo";
var crypto = require('crypto'); 

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const {db} = await connectToDatabase();
      const { body } = req;
      const { email, password } = body;
      const hash = crypto.pbkdf2Sync(password, process.env.SALT, 1000, 64, `sha512`).toString(`hex`); 
      const data = { email, hash };
      console.log(data);
      let info = await db.collection("user_details").find(data).toArray();
      console.log(info);
      if(info){
        res.send({ sucess: true, Api_key: info[0].hash, name:info[0].name });
      }else{
          res.send({ sucess: false});
        }
    } catch (error) {
      const response = {
        error: "300",
        message: "Something went Wrong",
      };
      res.send(JSON.stringify(response));
      return;
    }
  } else {
    const response = {
      error: "404",
      message: "Wrong method",
    };
    res.send(JSON.stringify(response));
    return;
  }
};
