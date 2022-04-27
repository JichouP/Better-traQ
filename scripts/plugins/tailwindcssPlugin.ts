/* eslint-disable import/no-extraneous-dependencies */
import { exec } from 'child_process';
import esbuild from 'esbuild';

const tailwindCssPlugin = (input: string, output: string): esbuild.Plugin => ({
  name: 'tailwindcss',
  setup: (build) => {
    build.onStart(() => {
      exec(`npx tailwindcss -i ${input} -o ${output}`);
    });
  },
});

export default tailwindCssPlugin;
