import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Contanos tu nombre.').max(100, 'Máximo 100 caracteres.'),
  email: z.string().trim().email('Ese email no parece válido.').max(200),
  company: z.string().trim().max(100, 'Máximo 100 caracteres.'),
  message: z
    .string()
    .trim()
    .min(20, 'Contanos un poco más (mínimo 20 caracteres).')
    .max(5000, 'Máximo 5000 caracteres.'),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactField = keyof ContactInput

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | {
      status: 'error'
      message: string
      fieldErrors?: Partial<Record<ContactField, string>>
      values?: Partial<ContactInput>
    }
