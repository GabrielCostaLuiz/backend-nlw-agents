import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../config/env.ts'
import { schema } from './schema/index.ts'

export const sql = postgres(env.DATABASE_URL)

/**
 * * Teste de funcionamento
 * const result = await sql`SELECT 'Hello' as message`
 * console.log(result)
 */

export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
})
