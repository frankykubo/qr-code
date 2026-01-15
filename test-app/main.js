// Import the built QR code component - now using the correct file
// This matches what `import '@frankykubo/qr-code'` will resolve to
import '../dist/components/qr-code.js';

const statusEl = document.getElementById('status');

function log(msg) {
  console.log(msg);
  statusEl.innerHTML += `<p>${msg}</p>`;
}

// Wait for custom element to be defined
customElements.whenDefined('qr-code').then(() => {
  log('qr-code custom element is defined!');

  const qr1 = document.getElementById('qr1');
  const qr2 = document.getElementById('qr2');

  log(`QR1 element exists: ${!!qr1}`);
  log(`QR1 has shadowRoot: ${!!qr1?.shadowRoot}`);

  if (qr1?.shadowRoot) {
    const svg = qr1.shadowRoot.querySelector('svg');
    log(`QR1 has SVG in shadow DOM: ${!!svg}`);
    if (svg) {
      log(`SVG has children: ${svg.children.length}`);
    }
  }

  log(`QR2 element exists: ${!!qr2}`);
  log(`QR2 has shadowRoot: ${!!qr2?.shadowRoot}`);
});

// Log any errors
window.onerror = (msg, url, line) => {
  log(`Error: ${msg} at ${url}:${line}`);
};
