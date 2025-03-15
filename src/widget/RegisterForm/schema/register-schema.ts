import { z } from 'zod'

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: 'Имя обязательное поле' })
      .min(2, 'Минимум 2 символа')
      .max(20, 'Максимум 20 символов'),
    email: z
      .string({ required_error: 'Email обязательное поле' })
      .email('Некорректный email'),
    password: z
      .string({ required_error: 'Пароль обязательное поле' })

      .regex(/^[^<>%$]*$/, { message: 'Пароль содержит недопустимые символы' }),
    confirmPassword: z.string({
      required_error: 'Подтверждение пароля обязательное поле'
    })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  })

export type RegisterSchema = z.infer<typeof registerSchema>
