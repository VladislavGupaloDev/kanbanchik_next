import { z } from 'zod'

export const settingsUserSchema = z.object({
  login: z
    .string()
    .min(2, 'Минимум 2 символа')
    .max(20, 'Максимум 20 символов')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Имя пользователя может состоять только из латицины и спемвола _'
    ),
  displayName: z
    .string()
    .min(2, 'Минимум 2 символа')
    .max(20, 'Максимум 20 символов')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Имя пользователя может состоять только из латицины и спемвола _'
    ),
  bio: z.string().max(300, 'Максимум 300 символов').optional()
})

export type SettingsUserSchema = z.infer<typeof settingsUserSchema>
