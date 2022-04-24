/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import archiver from "archiver";
import esbuild from "esbuild";

const zipPlugin = (
  targetDir: string,
  outDir: string,
  zipFileName: string
): esbuild.Plugin => ({
  name: "zip",
  setup: (build) => {
    build.onEnd(async () => {
      await fs.promises.mkdir(outDir, { recursive: true });
      const outputStream = fs.createWriteStream(`${outDir}/${zipFileName}`);
      const archive = archiver("zip", { zlib: { level: 9 } });
      archive.pipe(outputStream);
      archive.glob("*", { cwd: targetDir });
      await archive.finalize();
    });
  },
});

export default zipPlugin;
