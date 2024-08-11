import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    const url = 'https://playwright.dev/';
    const response = await page.goto(url);
    
    expect(response?.status()).toBe(200);
    const expectedTitle = "Fast and reliable end-to-end testing for modern web apps | Playwright"
    await expect(page).toHaveTitle(expectedTitle);
});