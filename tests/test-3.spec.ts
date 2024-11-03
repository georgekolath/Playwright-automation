import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByRole('link', { name: 'Create your Amazon account' }).click();
  await page.getByPlaceholder('First and last name').click();
  await page.getByPlaceholder('First and last name').fill('test test');
  await page.getByPlaceholder('First and last name').press('Tab');
  await page.locator('#auth-country-picker').press('Tab');
  await page.getByPlaceholder('Mobile number').fill('8838383838');
  await page.getByPlaceholder('At least 6 characters').click();
  await page.getByPlaceholder('At least 6 characters').fill('Google@123');
  await page.getByLabel('Verify mobile number').click();
  await page.goto('https://www.amazon.in/');
  await page.getByRole('heading', { name: 'Up to 80% off | Electronics' }).click();
  await page.getByRole('link', { name: 'Electronics See all offers' }).click();
  await page.getByRole('link', { name: 'Headphones Headphones' }).click();
  await page.locator('#sobe_d_b_ms_6_2').getByRole('link', { name: 'Active Noise Cancellation' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal').first().click();
  const page2 = await page2Promise;
  await page2.getByTitle('Add to Shopping Cart').click();
  await page2.getByRole('button', { name: 'Proceed to checkout (1 item)' }).click();
});

const maintitle = page.getByRole('heading', { name: 'Get lowest fares for the same flights with' });
expect(maintitle).toHaveTitle("Get lowest fares for the same flights with");