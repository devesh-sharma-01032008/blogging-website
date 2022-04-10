import excuteQuery from './ConnectSql.mjs'

export default async (req, res) => {
    try {
      const result = await excuteQuery({
          query: 'insert into iblog.popularblogs value()',
          values: [req.body.content],
      });
      res.send({sucess:"True"})
  } catch ( error ) {
  }
  };
