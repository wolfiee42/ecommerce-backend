import { Request, Response } from 'express';
import { productValidation } from './02.zod.product';
import { ProductService } from './06.service.product';

const createProduct = async (req: Request, res: Response) => {
  const { product: productData } = req.body;

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
    const result = await ProductService.getAllDataFromDB();
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

export const ProductController = {
  createProduct,
  getAllProduct,
};
