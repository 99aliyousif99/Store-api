const express = require("express");
const { getproducts } = require("../models/product");
const router = express.Router();


router.get("/getproducts", getproducts);



module.exports = router;
