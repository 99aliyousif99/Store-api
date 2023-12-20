const express = require("express");
const { getproducts,addproduct} = require("../models/product");
const router = express.Router();


router.get("/products/view", getproducts);
router.post("/products/add", addproduct);

module.exports = router;
