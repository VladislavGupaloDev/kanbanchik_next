import { z } from 'zod'

export const loginSchema = z.object({
  login: z.string().email(),
  password: z.string().min(8)
})

export type LoginSchema = z.infer<typeof loginSchema>
