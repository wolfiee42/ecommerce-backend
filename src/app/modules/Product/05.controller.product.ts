import { Request, Response } from 'express';
import { productValidation } from './02.zod.product';
import { ProductService } from './06.service.product';

const createProduct = async (req: Request, res: Response) => {
    const productData = req.body;

    try {
        // zod validation
        const validatedProductData = productValidation.parse(productData);
        const result = await ProductService.storeProductToDB(validatedProductData);

        res.status(200).json({
            success: true,
            message: ' Product created successfully!',
            data: result,
        });
    } catch (error: any | string) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
};

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        if (searchTerm) {
            const result = await ProductService.getAllDataFromDB(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully`,
                data: result,
            });
        }
        const result = await ProductService.getAllDataFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (error: any | string) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
};

const getSingleProduct = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params;
        const result = await ProductService.getSingleProductFromDB(productId);


        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }

}

const updateProductQuantity = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.updateProductQuantityAfterPurchase(productId, 1);

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }

}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductService.deleteProductFromDB(productId);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProductQuantity,
    deleteProduct
};
