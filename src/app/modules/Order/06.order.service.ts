import { Order } from "./01.order.interface"
import { orderModel } from "./03.order.model"

const storeOrderInDB = async (order: Order) => {
    const result = orderModel.create(order)
    return result;
}

const getAllOrderFromDB = async () => {
    const result = await orderModel.find({}, { email: 1, productId: 1, price: 1, quantity: 1 });
    return result;
}

export const OrderService = {
    storeOrderInDB,
    getAllOrderFromDB
}