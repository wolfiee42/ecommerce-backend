import mongoose from "mongoose";

const { Schema } = mongoose;

export const OrderSchema = new Schema({
    email: String,
    productId: String,
    price: Number,
    quantity: Number
})


export const orderModel = mongoose.model('Orders', OrderSchema);