import { z } from 'zod';

/**
 * Server-side environment variables schema.
 * These are only available on the server.
 */
const serverSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  // DATABASE_URL: z.string().url(),
  // AUTH_SECRET: z.string().min(32),
  // Add your server-only env vars here
});

/**
 * Client-side environment variables schema.
 * These must be prefixed with NEXT_PUBLIC_ in .env files.
 */
const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  // NEXT_PUBLIC_API_URL: z.string().url(),
  // Add your client env vars here
});

/**
 * Merged environment schema.
 */
const envSchema = serverSchema.merge(clientSchema);

export type Env = z.infer<typeof envSchema>;

/**
 * Validate and parse environment variables.
 * Throws a descriptive error at build time if validation fails.
 */
function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // Map additional env vars here
  });

  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2),
    );
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

export const env = validateEnv();
