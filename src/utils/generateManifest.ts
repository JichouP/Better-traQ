import { promises as fs } from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

const template = ({
  traQHost,
  service,
}: {
  traQHost: string;
  service: string;
}) => ({
  manifest_version: 2,
  name: `Better ${service}`,
  version: '2.0.0.2',
  description: `An Extension that Makes ${service} Useful`,
  icons: { '16': '16.png', '48': '48.png', '128': '128.png' },
  permissions: ['declarativeContent', 'storage'],
  page_action: {
    default_icon: { '16': '16.png', '24': '24.png', '32': '32.png' },
    default_title: 'Better traQ',
    default_popup: 'popup.html',
  },
  options_page: 'options.html',
  content_scripts: [
    { matches: [`https://${traQHost}/*`], js: ['content_scripts.js'] },
  ],
  background: { scripts: ['background.js'], persistent: false },
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
});

(async () => {
  const traQHost = process.env.HOST;
  const service = process.env.SERVICE;
  if (!traQHost || !service) {
    throw new Error('Environment variable is not set correctly');
  }
  const outDir = `dist/${service}`;
  await mkdirp(outDir);
  await fs.writeFile(
    path.resolve(outDir, 'manifest.json'),
    JSON.stringify(template({ traQHost, service }), null, 2)
  );
})();
