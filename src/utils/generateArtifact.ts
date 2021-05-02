import fs from 'fs';
import archiver from 'archiver';
import mkdirp from 'mkdirp';
import { SERVICE } from '@/env';

(async () => {
  const outDir = 'out';
  const distDir = 'dist';
  await mkdirp(outDir);
  const output = fs.createWriteStream(`${outDir}/${SERVICE}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });
  archive.pipe(output);
  archive.glob(`${SERVICE}/*`, { cwd: distDir });
  await archive.finalize();
})();
