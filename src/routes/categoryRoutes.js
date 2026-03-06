import { Router } from "express";
import { createCategory, getCategory } from "../controllers/categoryController.js";

const router = Router();

router.post("/", createCategory);
router.get("/:id", getCategory);

export default router;