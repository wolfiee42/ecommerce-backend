import { Request, Response } from "express";
import { OrderService } from "./06.order.service";
import { orderValidation } from "./02.order.zod";

const storeOrder = async (req: Request, res: Response) => {

    try {
        const order = req.body

        // zod validation
        const validatedOrderData = orderValidation.parse(order);

        const result = await OrderService.storeOrderInDB(validatedOrderData);


        res.status(200).json({
            success: true,
            message: "Order created successfully!",
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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getAllOrderFromDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}
export const orderController = {
    storeOrder,
    getAllOrders
}