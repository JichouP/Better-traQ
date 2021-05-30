const esbuild = require('esbuild');

function bundle({ outdir, watch, minify }) {
  return async function bundle(cb) {
    await esbuild.build({
      entryPoints: {
        background: 'src/background/index.ts',
        content_scripts: 'src/content_scripts/index.ts',
        options: 'src/options/index.tsx',
        popup: 'src/popup/index.tsx',
      },
      bundle: true,
      outdir,
      watch: watch && {
        onRebuild: (err, res) => {
          const now = `[${'\033[90m'}${new Date().toLocaleTimeString()}${'\033[39m'}]`;
          if (err) {
            return console.error(`${now} ${err}`);
          }
          console.log(`${now} Update detected. Rebuild done.`);
          if (res.warnings.length) {
            console.log(`${now} ${res.warnings}`);
          }
        },
      },
      minify,
    });
    cb();
  };
}

module.exports = bundle;
