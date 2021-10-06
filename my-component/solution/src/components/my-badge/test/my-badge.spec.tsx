import { newSpecPage } from '@stencil/core/testing';
import { MyBadge } from '../my-badge';

describe('my-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyBadge],
      html: `<my-badge></my-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <my-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-badge>
    `);
  });
});
