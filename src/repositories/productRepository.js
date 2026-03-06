import Product from "../models/Product.js";

export const create = (data) => Product.create(data);

export const findByIdPopulated = (id) =>
  Product.findById(id).populate("categoryId");