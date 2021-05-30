const fs = require('fs');
const archiver = require('archiver');

function generateArtifact(distDir, outDir, SERVICE) {
  return async function generateArtifact(cb) {
    await fs.promises.mkdir(outDir, { recursive: true });
    const output = fs.createWriteStream(`${outDir}/${SERVICE}.zip`);
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(output);
    archive.glob(`*`, { cwd: distDir });
    await archive.finalize();
    cb();
  };
}

module.exports = generateArtifact;
