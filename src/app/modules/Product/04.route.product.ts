import express from 'express';
import { ProductController } from './05.controller.product';

const route = express.Router();

// creating a product and string it into database
route.post('/products', ProductController.createProduct);

// getting all products in one place
route.get('/products', ProductController.getAllProduct);

// getting individual product details
route.get('/products/:productId', ProductController.getSingleProduct)


export const ProductRoute = route;
