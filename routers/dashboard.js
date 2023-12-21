const express = require("express");
const { getproducts,addproduct,updateproduct,deleteproduct } = require("../models/product");
const {updatestatus,getorders,} = require("../models/order");
const {register ,login} = require("../models/admin");
const router = express.Router();

router.get("/products/view", getproducts);
router.post("/products/add", addproduct);
router.put("/products/update/:id", updateproduct);
router.delete("/products/delete/:id", deleteproduct);
router.get("/orders/view", getorders);
router.put("/orders/changestatus/:id", updatestatus);
router.put("/admin/register", register);
router.put("/admin/login", login);

module.exports = router;
