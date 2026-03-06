import Category from "../models/Category.js";

export const create = (data) => Category.create(data);

export const findByIdPopulated = (id) =>
  Category.findById(id).populate("subcategories").populate("products");

export const addSubcategoryToParent = (parentId, childId) =>
  Category.findByIdAndUpdate(
    parentId,
    { $addToSet: { subcategories: childId } },
    { new: true }
  );