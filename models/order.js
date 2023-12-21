const client = require("../db");

async function getorders(req, res) {
  const result = await client.query(`SELECT * FROM orders`);
  res.send(result.rows);
  //console.log(result.rows)
}
async function updatestatus(req, res) {
  let id = req.params.id;
  let { status } = req.body;
  const result = await client.query(`UPDATE orders
    SET status = ${status} WHERE id = ${id} RETURNING *`);
  res.send(result.rows);
  //console.log(result.rows)
}

async function addorders(req, res) {
  let {id, items, userid,address,date,status } = req.body;
  const result =
    await client.query(`INSERT INTO orders (id, items, userid,address,date,status)
    VALUES (${id} , ${items} ,${userid} ,${address} ,${date} ,${status} ) RETURNING *`);
  //res.send(result.rows);
  console.log(result.rows);
}

module.exports = {
  addorders,
  updatestatus,
  getorders,
};

//addorders()
//updatestatus()
// getorders()
