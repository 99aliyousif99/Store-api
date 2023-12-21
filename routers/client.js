const express = require("express");
const { getproducts,addproduct} = require("../models/product");
const { login,register} = require("../models/user");
const router = express.Router();


router.get("/products/view", getproducts);
router.post("/products/add", addproduct);
router.post("/users/register", register);
router.post("/users/login", login);
module.exports = router;
