import * as productRepo from "../repositories/productRepository.js";
import Category from "../models/Category.js";

export const createProduct = async ({ name, price = 0, categoryId = null }) => {
  const product = await productRepo.create({ name, price, categoryId });

  if (categoryId) {
    await Category.findByIdAndUpdate(
      categoryId,
      { $addToSet: { products: product._id } },
      { new: true }
    );
  }

  return product;
};

export const getProduct = async (id) => {
  return productRepo.findByIdPopulated(id);
};