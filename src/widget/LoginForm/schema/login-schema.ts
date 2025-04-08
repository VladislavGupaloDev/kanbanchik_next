import { z } from 'zod'

export const loginSchema = z.object({
  login: z.string(),
  password: z.string().min(8),
  totpToken: z
    .string()
    .length(6)
    .optional()
    .transform(val => (val === '' ? undefined : val))
})

export type LoginSchema = z.infer<typeof loginSchema>
