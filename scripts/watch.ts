/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';
import generateManifestPlugin from './plugins/generateManifestPlugin';
import tailwindCssPlugin from './plugins/tailwindcssPlugin';

const { HOST, SERVICE, VERSION, BROWSER } = process.env;
if (!HOST || !SERVICE || !VERSION || !BROWSER)
  throw new Error('Environment variable is not set correctly');

const distDir = `dist/${SERVICE}/${BROWSER}`;
const assetDir = 'public';

esbuild.build({
  entryPoints: {
    background: 'src/background/index.ts',
    content_scripts: 'src/content_scripts/index.ts',
    options: 'src/options/index.tsx',
    popup: 'src/popup/index.tsx',
  },
  bundle: true,
  define: { 'process.env.HOST': `'${HOST}'` },
  outdir: distDir,
  watch: {
    onRebuild: (err, res) => {
      const now = `[${'\x1b[90m'}${new Date().toLocaleTimeString()}${'\x1b[39m'}]`;
      if (err) {
        return console.error(`${now} ${err}`);
      }
      console.log(`${now} Update detected. Rebuilt.`);
      if (res && res.warnings.length) {
        console.log(`${now} ${res.warnings}`);
      }
    },
  },
  plugins: [
    copyPlugin(assetDir, distDir),
    generateManifestPlugin({ HOST, SERVICE, VERSION, BROWSER, distDir }),
    tailwindCssPlugin(`${assetDir}/tailwind.css`, `${distDir}/tailwind.css`),
  ],
});
