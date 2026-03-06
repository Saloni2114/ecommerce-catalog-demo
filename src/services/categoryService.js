import * as categoryRepo from "../repositories/categoryRepository.js";

export const createCategory = async ({ name, parentId = null }) => {
  const category = await categoryRepo.create({ name, parentId });

  if (parentId) {
    await categoryRepo.addSubcategoryToParent(parentId, category._id);
  }

  return category;
};

export const getCategory = async (id) => {
  return categoryRepo.findByIdPopulated(id);
};