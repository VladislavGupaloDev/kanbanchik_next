import { z } from 'zod'

export const passwordRecoverySchema = z.object({
  email: z.string().email()
})

export type PasswordRecoverySchema = z.infer<typeof passwordRecoverySchema>
