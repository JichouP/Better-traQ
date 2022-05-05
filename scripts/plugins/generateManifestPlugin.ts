/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';

const template = ({
  HOST,
  SERVICE,
  VERSION,
  BROWSER,
}: {
  HOST: string;
  SERVICE: string;
  VERSION: string;
  BROWSER: string;
}) => {
  const manifest: Record<string, unknown> =
    BROWSER === 'firefox'
      ? {
          manifest_version: 2,
          name: `Better ${SERVICE}`,
          version: `${VERSION}`,
          browser_action: {
            default_icon: {
              '16': '16.png',
              '24': '24.png',
              '32': '32.png',
            },
            default_title: `Better ${SERVICE}`,
            // default_popup: 'popup.html',
          },
          description: `An extension that makes ${SERVICE} useful`,
          icons: {
            '16': '16.png',
            '48': '48.png',
            '128': '128.png',
          },
          permissions: ['storage'],
          background: { scripts: ['background.js'], persistent: false },
          content_scripts: [
            {
              matches: [`https://${HOST}/*`],
              js: ['content_scripts.js'],
            },
          ],
          options_ui: {
            open_in_tab: true,
            page: 'options.html',
          },
          browser_specific_settings: {
            gecko: {
              id: SERVICE === 'traQ' ? '@bettertraq' : '@betterextraq',
              update_url: `https://jichoup.github.io/Better-traQ/updates.json`,
            },
          },
        }
      : {
          manifest_version: 3,
          name: `Better ${SERVICE}`,
          version: `${VERSION}`,
          action: {
            default_icon: {
              '16': '16.png',
              '24': '24.png',
              '32': '32.png',
            },
            default_title: `Better ${SERVICE}`,
            // default_popup: 'popup.html',
          },
          description: `An extension that makes ${SERVICE} useful`,
          icons: {
            '16': '16.png',
            '48': '48.png',
            '128': '128.png',
          },
          permissions: ['declarativeContent', 'storage'],
          background: {
            service_worker: 'background.js',
            type: 'module',
          },
          content_scripts: [
            {
              matches: [`https://${HOST}/*`],
              js: ['content_scripts.js'],
            },
          ],
          options_page: 'options.html',
        };
  return manifest;
};

const generateManifestPlugin = ({
  HOST,
  SERVICE,
  VERSION,
  BROWSER,
  distDir,
}: {
  HOST: string;
  SERVICE: string;
  VERSION: string;
  BROWSER: string;
  distDir: string;
}): esbuild.Plugin => ({
  name: 'generateManifestPlugin',
  setup: (build) => {
    build.onStart(async () => {
      await fs.promises.mkdir(distDir, { recursive: true });
      await fs.promises.writeFile(
        path.resolve(distDir, 'manifest.json'),
        JSON.stringify(template({ HOST, SERVICE, VERSION, BROWSER }), null, 2)
      );
    });
  },
});

export default generateManifestPlugin;
