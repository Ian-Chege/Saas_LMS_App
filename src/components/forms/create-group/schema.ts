import { z } from "zod"

export const CreateGroupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Group name must be at least 3 characters long" }),
  category: z.string().min(3, { message: "Please select a category" }),
})