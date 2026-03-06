import * as categoryService from "../services/categoryService.js";

export const createCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const category = await categoryService.createCategory({ name, parentId });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategory(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};