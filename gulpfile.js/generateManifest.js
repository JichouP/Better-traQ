const fs = require('fs');
const path = require('path');

function template({ HOST, SERVICE, VERSION }) {
  return {
    manifest_version: 2,
    name: `Better ${SERVICE}`,
    version: VERSION,
    description: `An Extension that Makes ${SERVICE} Useful`,
    icons: { 16: '16.png', 48: '48.png', 128: '128.png' },
    permissions: ['declarativeContent', 'storage'],
    page_action: {
      default_icon: { 16: '16.png', 24: '24.png', 32: '32.png' },
      default_title: 'Better traQ',
      default_popup: 'popup.html',
    },
    options_page: 'options.html',
    content_scripts: [
      { matches: [`https://${HOST}/*`], js: ['content_scripts.js'] },
    ],
    background: { scripts: ['background.js'], persistent: false },
    content_security_policy:
      "script-src 'self' 'unsafe-eval'; object-src 'self'",
  };
}

function generateManifest({ HOST, SERVICE, VERSION, distDir }) {
  return async function generateManifest(cb) {
    await fs.promises.mkdir(distDir, { recursive: true });
    await fs.promises.writeFile(
      path.resolve(distDir, 'manifest.json'),
      JSON.stringify(template({ HOST, SERVICE, VERSION }), null, 2)
    );
    cb();
  };
}

module.exports = generateManifest;
