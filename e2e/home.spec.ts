import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have a working navigation', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto('/');
    // Check that at least one card is visible
    const cards = page.locator('[class*="card"]');
    await expect(cards.first()).toBeVisible();
  });
});

test.describe('API Health Check', () => {
  test('should return 200', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.status).toBe('ok');
  });
});
