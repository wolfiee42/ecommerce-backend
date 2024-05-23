import { productModel } from './03.model.product';
import { Product } from './01.interface.product';

const storeProductToDB = async (productData: Product) => {
  const result = await productModel.create(productData);
  return result;
};

const getAllDataFromDB = async () => {
  const result = await productModel.find();
  return result;
};

export const ProductService = {
  storeProductToDB,
  getAllDataFromDB,
};
