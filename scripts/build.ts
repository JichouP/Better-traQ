// eslint-disable-next-line import/no-extraneous-dependencies
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';
import generateManifestPlugin from './plugins/generateManifestPlugin';
import logPlugin from './plugins/logPlugin';
import tailwindcssPlugin from './plugins/tailwindcssPlugin';
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
  },
  bundle: true,
  define: {
    'process.env.HOST': `'${HOST}'`,
    'process.env.VERSION': `'${VERSION}'`,
    'process.env.SERVICE': `'${SERVICE}'`,
  },
  outdir: distDir,
  minify: true,
  plugins: [
    logPlugin({ SERVICE, VERSION, BROWSER }),
    copyPlugin(assetDir, distDir),
    generateManifestPlugin({ HOST, SERVICE, VERSION, BROWSER, distDir }),
    tailwindcssPlugin(`${assetDir}/tailwind.css`, `${distDir}/tailwind.css`),
    zipPlugin(distDir, outDir, `${SERVICE}-${BROWSER}-${VERSION}.zip`),
  ],
});
