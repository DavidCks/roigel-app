//database connection requirements
const { Pool } = require("pg");
const dburl = process.env.DATABASE_URL;

/* 
  - "connectdb" is a class. it handles the connection to the postgres server.
  - "query" method of this class takes in a SQL query and returns the 
  response of the postgres server"
*/
class connectdb {
  a = "2";

  constructor() {
    this.dburl = dburl;
    this.pool = new Pool({ 
      connectionString: dburl,
      ssl: { rejectUnauthorized: false }
    });
  }

  query (query) {
    const result =  this.pool.query(query.text, query.values)
      .then(res => {
        this.pool.end();
        return res.rows;
      })
      .catch(e => {
        return { error: e.stack };
      });
    
    return result;
  };

}

module.exports = connectdb;