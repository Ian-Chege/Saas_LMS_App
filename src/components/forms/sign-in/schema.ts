import { z } from "zod"

export const SignInSchema = z.object({
  email: z.string().email("You must provide a valid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(15, { message: "Password cannot be longer than 15 characters long" })
    .refine(
      (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
      "password should contain only alphabets and numbers",
    ),
})
