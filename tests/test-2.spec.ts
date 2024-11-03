import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://getfares.com/');
  await page.goto('https://getfares.com/SignIn');
  
  const singin = await page.getByRole('button', { name: 'Sign In' });
  await expect(singin).toBeVisible();
});