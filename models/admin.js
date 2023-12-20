const client = require("../db")
const bcrypt = require("bcrypt");


async function register(req, res) {
    //let { id,name,department,username, password } = req.body;
  
    const hashPasswod = bcrypt.hashSync(password, 10);
  
    const result = await client.query(`INSERT INTO admins (id,name,department,username, password)
    VALUES ('1','aliyousif','cs','hello', '1234') RETURNING *`);
  
    res.send({
      success: true,
      user: result.rows[0],
    });
   // console.log(result.rows)
  }


  module.exports = {
    register
    };
  