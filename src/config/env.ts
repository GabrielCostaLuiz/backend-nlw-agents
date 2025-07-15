import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith('postgresql://'),
  GEMINI_API_KEY: z.string(),
})

/**
 * const _env = envSchema.safeParse(process.env)
 * if (!_env.success) {
      process.exit(1)
    }
 */

export const env = envSchema.parse(process.env)
