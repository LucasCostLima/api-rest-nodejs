import 'dotenv/config'
import { z } from 'zod'

const envschema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envschema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid Enviroment Variables!', _env.error.format())
  throw new Error('Invalid Enviroment Variables')
}

export const env = _env.data