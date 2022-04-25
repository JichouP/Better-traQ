// eslint-disable-next-line import/no-extraneous-dependencies
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';
import generateManifestPlugin from './plugins/generateManifestPlugin';
import zipPlugin from './plugins/zipPlugin';

const { HOST, SERVICE, VERSION, BROWSER } = process.env;
if (!HOST || !SERVICE || !VERSION || !BROWSER)
  throw new Error('Environment variable is not set correctly');

const outDir = 'out';
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
  minify: true,
  plugins: [
    copyPlugin(assetDir, distDir),
    generateManifestPlugin({ HOST, SERVICE, VERSION, BROWSER, distDir }),
    zipPlugin(distDir, outDir, `${SERVICE}-${BROWSER}-${VERSION}.zip`),
  ],
});
