/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';
import generateManifestPlugin from './plugins/generateManifestPlugin';

const { HOST, SERVICE, VERSION } = process.env;
if (!HOST || !SERVICE || !VERSION)
  throw new Error('Environment variable is not set correctly');

const distDir = `dist/${SERVICE}`;
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
    generateManifestPlugin({ HOST, SERVICE, VERSION, distDir }),
  ],
});
