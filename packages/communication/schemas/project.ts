import { z } from 'zod'

export const projectCreateSchema = z.object({
  type: z
    .enum(['productivity', 'general', 'report-generation'])
    .optional()
    .default('general'),
  name: z
    .string({
      required_error: 'Você precisa colocar um nome para o projeto.',
    })
    .min(6, {
      message: 'O projeto precisa ter no mínimo 6 caracteres.',
    }),
  description: z
    .string()
    .max(512, {
      message: 'A descrição não pode passar de 512 caracteres.',
    })
    .optional()
    .default(''),
})

export type ProjectCreateSchema = z.infer<typeof projectCreateSchema>
