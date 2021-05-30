const fs = require('fs-extra');

function copyAssetFiles(assetDir, distDir) {
  return async function copyAssetFiles(cb) {
    await fs.promises.mkdir(distDir, { recursive: true });
    await fs.copy(assetDir, distDir, (err) => {
      if (err) console.error(err);
    });
    cb();
  };
}

module.exports = copyAssetFiles;
