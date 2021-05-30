const { series } = require('gulp');
const generateManifest = require('./generateManifest');
const generateArtifact = require('./generateArtifact');
const copyAssetFiles = require('./copyAssetFiles');
const bundle = require('./bundle');

const { HOST, SERVICE, VERSION } = process.env;
if (!HOST || !SERVICE || !VERSION)
  throw new Error('Environment variable is not set correctly');

const outDir = 'out';
const distDir = `dist/${SERVICE}`;
const assetDir = 'public';

exports.build = series(
  copyAssetFiles(assetDir, distDir),
  generateManifest({ HOST, SERVICE, VERSION, distDir }),
  bundle({ outdir: distDir, watch: false, minify: true, HOST }),
  generateArtifact(distDir, outDir, SERVICE)
);

exports.watch = series(
  copyAssetFiles(assetDir, distDir),
  generateManifest({ HOST, SERVICE, VERSION, distDir }),
  bundle({ outdir: distDir, watch: true, minify: false, HOST })
);
