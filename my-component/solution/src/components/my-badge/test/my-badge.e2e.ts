import { newE2EPage } from '@stencil/core/testing';

describe('my-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-badge></my-badge>');

    const element = await page.find('my-badge');
    expect(element).toHaveClass('hydrated');
  });
});
