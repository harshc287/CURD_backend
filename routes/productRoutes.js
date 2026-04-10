const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controller/productController');

const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/", protect, createProduct);
router.get("/getProducts", protect, getProducts);
router.get("/getProductById/:id", protect, getProductById);
router.put("/updateProduct/:id", protect, updateProduct);
router.delete("/deleteProduct/:id", protect, deleteProduct);

module.exports = router;