import express from 'express';
import { orderController } from './05.order.controller';

const route = express.Router();

route.post('/orders', orderController.storeOrder)

route.get('/orders', orderController.getAllOrders)

export const OrderRoute = route;