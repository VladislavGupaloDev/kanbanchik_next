import { z } from 'zod'

//TODO: Поменять на PasswordConfirm
export const newPasswordSchema = z
  .object({
    password: z
      .string({ required_error: 'Пароль обязательное поле' })
      .regex(/^[^<>%$]*$/, 'Пароль содержит недопустимые символы')
      .min(8, 'Пароль должен содержать от 8 до 20 символов')
      .max(20, 'Пароль должен содержать от 8 до 20 символов'),
    passwordRepeat: z.string({
      required_error: 'Подтверждение пароля обязательное поле'
    })
  })
  .refine(data => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['passwordRepeat']
  })

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>
