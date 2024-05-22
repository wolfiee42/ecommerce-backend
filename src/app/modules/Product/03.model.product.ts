import mongoose from 'mongoose';

const { Schema } = mongoose;

const VarientSchema = new Schema({
    type: String,
    value: String,
})

const inventorySchema = new Schema({
    quantity: Number,
    inStock: Boolean,
})

export const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [VarientSchema],
    inventory: inventorySchema,
})