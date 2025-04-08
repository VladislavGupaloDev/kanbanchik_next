import { z } from 'zod'

export const registerSchema = z
  .object({
    login: z
      .string({ required_error: 'Имя обязательное поле' })
      .min(2, 'Минимум 2 символа')
      .max(20, 'Максимум 20 символов')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Имя пользователя может состоять только из латицины и спемвола _'
      ),
    email: z
      .string({ required_error: 'Email обязательное поле' })
      .email('Некорректный email'),
    password: z
      .string({ required_error: 'Пароль обязательное поле' })
      .regex(/^[^<>%$]*$/, 'Пароль содержит недопустимые символы')
      .min(8, 'Пароль должен содержать от 8 до 20 символов')
      .max(20, 'Пароль должен содержать от 8 до 20 символов'),
    confirmPassword: z.string({
      required_error: 'Подтверждение пароля обязательное поле'
    })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  })

export type RegisterSchema = z.infer<typeof registerSchema>
