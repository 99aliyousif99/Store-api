const client = require("../db")


async function getproducts(req, res) {
    const result = await client.query(`SELECT * FROM products`);
    res.send(result.rows);
    //console.log(result.rows)

  }

  async function addproduct(req, res) {
    let {id, name, price,discount,image,active,expire } = req.body;
    const result = await client.query(`INSERT INTO products (id, name, price,discount,image,active,expire)
    VALUES (${id} , ${name} ,${price} ,${discount} ,${image} ,${active} ,${expire} ) RETURNING *`);
    //res.send(result.rows);
    console.log(result.rows)
  }


  async function updateproduct(req, res) {
    let id = req.params.id;
    let { name, price,discount,image,active,expire } = req.body;
    const result = await client.query(`UPDATE products
    SET name = ${name} , price = ${price}, discount = ${discount},image = ${image},active = ${active},expire =${expire}
    WHERE id = ${id} RETURNING *`);
    res.send(result.rows);
    //console.log(result.rows)
  }

  async function deleteproduct(req, res) {
    let id = req.params.id;
    const result = await client.query(`DELETE FROM products
    WHERE id = ${id}
    RETURNING *`);
    
    res.send(result.rows);
    //console.log(result.rows)
  }
  


  module.exports = {
  addproduct,
  getproducts,
  updateproduct,
  deleteproduct
  };


  
  //addproduct();
  //getproducts();
  //updateproduct();
  //deleteproduct();