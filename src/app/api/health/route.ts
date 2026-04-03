import { NextResponse } from 'next/server';

/**
 * GET /api/health
 * Health check endpoint for monitoring and load balancers.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
    },
    { status: 200 },
  );
}
