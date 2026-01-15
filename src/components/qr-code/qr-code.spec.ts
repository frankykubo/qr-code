import { newSpecPage } from '@stencil/core/testing';
import { BpQRCode } from './qr-code';

describe('qr-code', () => {
  it('should build', () => {
    expect(new BpQRCode()).toBeTruthy();
  });

  describe('rendering', () => {
    it('should render without parameters', async () => {
      const page = await newSpecPage({
        components: [BpQRCode],
        html: '<qr-code></qr-code>',
      });
      expect(page.root).toBeTruthy();
    });
  });
});
