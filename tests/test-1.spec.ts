import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.eqs.com/');
  await page.getByLabel('Agree and close: Agree to our').click();
  await page.locator('#menu-item-191 div').click();
  await page.locator('#compliance-solutions').getByRole('link', { name: 'Compliance COCKPIT' }).click();
  await page.getByRole('link', { name: 'Learn more' }).first().click();
  await page.getByRole('link', { name: 'Compliance Solutions' }).click();
  await page.getByRole('link', { name: 'Whistleblowing Solution' }).click();
  await page.goto('https://www.eqs.com/compliance-solutions/compliance-platform/');
  await page.getByRole('link', { name: 'Learn more' }).nth(1).click();
  await page.getByRole('link', { name: 'Functions' }).click();
  await page.getByRole('link', { name: 'Partner Integrity Hub' }).click();
  await page.getByRole('link', { name: 'Benefits' }).click();
  await page.getByRole('link', { name: 'FAQ' }).click();
  await page.locator('#top').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('heading', { name: 'Always stay up to date' }).click();
});