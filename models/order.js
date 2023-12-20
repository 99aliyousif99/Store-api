const client = require("../db")

async function getorders(req, res) {
    const result = await client.query(`SELECT * FROM orders`);
    res.send(result.rows);
    //console.log(result.rows)

  }
  async function updatestatus(req, res) {
    //let id = req.params.id;
    //let { status } = req.body;
    const result = await client.query(`UPDATE orders
    SET status = 'preparing' WHERE id = 1 RETURNING *`);
    res.send(result.rows);
    //console.log(result.rows)
  }

  async function addorders(req, res) {
    //let {id, items, userid,address,date,status } = req.body;
    const result = await client.query(`INSERT INTO orders (id, items, userid,address,date,status)
    VALUES ('2', 'chocolate','3','11th street','2023/11/12','active') RETURNING *`);
    //res.send(result.rows);
    console.log(result.rows)
  }

  










//addorders()
//updatestatus()
// getorders()