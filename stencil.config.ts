import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'qr-code',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
};
