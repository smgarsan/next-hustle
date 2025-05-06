import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
    .string()
    .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))))

export const insertProductSchema = z.object({
    name: z.string().min(1),
    slug: z.string().min(1),
    category: z.string().min(1),
    brand: z.string().min(1),
    description: z.string().min(1),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
});
