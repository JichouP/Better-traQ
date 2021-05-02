import { promises as fs } from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

const template = ({ traQHost }: { traQHost: string }) => ({
  manifest_version: 3,
  name: 'Better traQ',
  version: '2.0.0.0',
  default_locale: 'ja',
  description: 'An Extension that Makes traQ Useful',
  icons: { '16': '16.png', '48': '48.png', '128': '128.png' },
  permissions: ['declarativeContent', 'storage'],
  action: {
    default_icon: { '16': '16.png', '24': '24.png', '32': '32.png' },
    default_title: 'Better traQ',
    default_popup: 'popup.html',
  },
  content_scripts: [
    { matches: [`https://${traQHost}/*`], js: ['content_scripts.js'] },
  ],
  background: { service_worker: 'background.js' },
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
});

(async () => {
  const traQHost = process.env.HOST;
  const outDir = `dist/${process.env.SERVICE}`;
  if (!traQHost) {
    throw new Error('Environment variable is not set');
  }
  await mkdirp(outDir);
  await fs.writeFile(
    path.resolve(outDir, 'manifest.json'),
    JSON.stringify(template({ traQHost }), null, 2)
  );
})();
