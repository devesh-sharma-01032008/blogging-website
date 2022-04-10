import excuteQuery from "./ConnectSql.mjs";
var crypto = require('crypto'); 

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const hash = crypto.pbkdf2Sync(request.body.password, "alpha-gamma-beta-theta",  
      1000, 64, `sha512`).toString(`hex`);

      const result = await excuteQuery({
        query:
          "insert into iblog.user_details(name,email,phone_number,password) value(?,?,?,?)",
        values: [
          req.body.name,
          req.body.email,
          req.body.phone_number,
          hash
        ],
      });
      res.send({ sucess: "Login Successfully", "Api_key":hash  });
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
