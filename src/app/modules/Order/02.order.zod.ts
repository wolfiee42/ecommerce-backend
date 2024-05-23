import { z } from 'zod';

export const orderValidation = z.object({
    email: z.string().nonempty('Email is required.'),
    productId: z.string().nonempty('productId is required.'),
    price: z.number().min(0).positive(),
    quantity: z.number().min(0).positive(),
});