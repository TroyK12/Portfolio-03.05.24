import zod from "zod";

const envSchema = zod.object({
    EMAIL: zod.string().nonempty(),
    PASSWORD: zod.string().nonempty(),
})

export const env = envSchema.parse(process.env);