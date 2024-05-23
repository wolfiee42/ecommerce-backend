import { productModel } from './03.model.product';
import { Product } from './01.interface.product';

const storeProductToDB = async (productData: Product) => {
    const result = await productModel.create(productData);
    return result;
};

const getAllDataFromDB = async (searchTerm: any) => {

    if (searchTerm) {
        const allProducts = await productModel.find(
            { $text: { $search: searchTerm } }
        );
        const result = allProducts.map((product) => ({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tags: product.tags,
            variants: product.variants.map((variants) => ({
                type: variants.type,
                value: variants.value,
            })),
            inventory: {
                quantity: product.inventory.quantity,
                inStock: product.inventory.inStock,
            }

        }))
        return result;

    }

    const allProducts = await productModel.find();

    const result = allProducts.map((product) => ({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tags: product.tags,
        variants: product.variants.map((variants) => ({
            type: variants.type,
            value: variants.value,
        })),
        inventory: {
            quantity: product.inventory.quantity,
            inStock: product.inventory.inStock,
        }

    }))
    return result;

};

const getSingleProductFromDB = async (productId: string) => {
    const product = await productModel.findById(productId) as Product;

    const filteredProduct = (product: Product) => {
        return {
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tags: product.tags,
            variants: product.variants.map((varient) => ({
                type: varient.type,
                value: varient.value,
            })),
            inventory: {
                quantity: product.inventory.quantity,
                inStock: product.inventory.inStock,
            }
        }
    }

    return filteredProduct(product);
}

const updateProductQuantityAfterPurchase = async (productId: string, quantity: number) => {
    const product = await productModel.findByIdAndUpdate(
        productId,
        { $inc: { 'inventory.quantity': -quantity } },
        { new: true }
    );
    return product
}

const deleteProductFromDB = async (productId: string) => {
    const result = await productModel.findByIdAndDelete(productId);
    return result
}

export const ProductService = {
    storeProductToDB,
    getAllDataFromDB,
    getSingleProductFromDB,
    updateProductQuantityAfterPurchase,
    deleteProductFromDB
};
