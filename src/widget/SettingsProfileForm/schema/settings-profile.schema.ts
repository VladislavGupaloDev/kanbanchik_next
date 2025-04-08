import { z } from 'zod'

export const settingsProfileSchema = z.object({
  fullName: z.string().min(2).max(26).optional(),
  publicEmail: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  private: z.boolean().optional(),
  birthday: z.date().optional()
})

export type SettingsProfileSchema = z.infer<typeof settingsProfileSchema>
