import express from "express"
import { isAuthenticated, isAdmin } from "../middlewares/auth.js"
import { singleUpload } from "../middlewares/multer.js"
import { addCategory, addProductImage, createProduct, deleteCategory, deleteProduct, deleteProductImage,
     getAllCategories, getAllProducts, getProductDetails, updateProduct } from "../controllers/product.js";

const router = express.Router()

router.get("/all", getAllProducts)

router.route("/single/:id")
.get(getProductDetails)
.put(isAuthenticated, updateProduct)
.delete(isAuthenticated, deleteProduct)

router.post("/new", isAuthenticated,  singleUpload, createProduct)

router.route("/images/:id").post(isAuthenticated,,  isAdmin,addProductImage, singleUpload)
    .delete(isAuthenticated, deleteProductImage)

router.post("/new", isAuthenticated, singleUpload, createProduct)


router.post("/category", isAuthenticated, isAdmin, addCategory)

router.get("/categories", getAllCategories)

router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory)

export default router;