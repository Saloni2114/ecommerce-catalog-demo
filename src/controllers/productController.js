import * as productService from "../services/productService.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;
    const product = await productService.createProduct({ name, price, categoryId });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};