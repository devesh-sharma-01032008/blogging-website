import excuteQuery from "./ConnectSql.mjs";

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const result = await excuteQuery({
        query:
          "insert into iblog.user_details(name,email,phone_number,password) value(?,?,?,?)",
        values: [
          req.body.name,
          req.body.email,
          req.body.phone_number,
          req.body.password,
        ],
      });
      res.send({ sucess: "True" });
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
