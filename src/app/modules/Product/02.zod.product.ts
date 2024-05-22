import { z } from 'zod';


const varientValidation = z.object({
    type: z.string().nonempty('Type is required'),
    value: z.string().nonempty('Value is required')
})

const inventoryValidation = z.object({
    quantity: z.number(),
    inStock: z.boolean(),
})


export const productValidation = z.object({
    name: z.string().nonempty('Name is required.'),
    description: z.string().nonempty('Description is required'),
    price: z.number().positive('Can not be less than 0').min(0, 'Can not be less than 0'),
    category: z.string().nonempty('Category is required'),
    tags: z.string().array().nonempty('Tags are required'),
    variants: z.array(varientValidation),
    inventory: inventoryValidation
})