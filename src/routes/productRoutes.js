import { Router } from "express";
import { createProduct, getProduct } from "../controllers/productController.js";

const router = Router();

router.post("/", createProduct);
router.get("/:id", getProduct);

export default router;