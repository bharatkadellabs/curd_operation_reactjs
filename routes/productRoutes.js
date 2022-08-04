const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getAllProduct);
router.post("/", productController.addProduct);
router.get("/:id", productController.getById);
router.put("/:id",productController.updateProduct);
router.delete("/:deleteId", productController.deleteProduct);


module.exports = router;

