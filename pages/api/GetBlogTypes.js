import excuteQuery from './ConnectSql.mjs'

export default async (req, res) => {
    try {
      const result = await excuteQuery({
          query: 'select * from iblog.blogs_type',
          values:[]
      });
      res.send({sucess:"True", data:result})
  } catch ( error ) {
  }
  };
