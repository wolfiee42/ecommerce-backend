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

const getSingleProductFromDB = async (productId: string) => {
    const result = await productModel.findById(productId);
    return result
}

export const ProductService = {
    storeProductToDB,
    getAllDataFromDB,
    getSingleProductFromDB
};
