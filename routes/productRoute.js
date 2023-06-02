const express = require("express");
const {createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct} = require("../controllers/productCtrl");
const { isAdmin, authMidleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/',authMidleware,isAdmin , createProduct); 
router.get('/:id',getaProduct); 
router.put('/:id',authMidleware,isAdmin , updateProduct); 
router.delete('/:id',authMidleware,isAdmin , deleteProduct); 
router.get('/',getAllProduct); 

module.exports = router;