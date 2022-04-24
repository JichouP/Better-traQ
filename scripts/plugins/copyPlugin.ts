/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import esbuild from "esbuild";

const copyPlugin = (srcDir: string, destDir: string): esbuild.Plugin => ({
  name: "copy",
  setup: (build) => {
    build.onStart(async () => {
      await fs.promises.mkdir(destDir, { recursive: true });
      await fs.promises.cp(srcDir, destDir, { recursive: true });
    });
  },
});

export default copyPlugin;
