/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { exec } from 'child_process';
import esbuild from 'esbuild';

const execPromise = (command: string): Promise<void> =>
  new Promise((resolve, reject) => {
    exec(command, (error) => {
      if (error) return reject(error);
      resolve();
    });
  });

const tailwindcssPlugin = (input: string, output: string): esbuild.Plugin => ({
  name: 'tailwindcss',
  setup: (build) => {
    build.onStart(async () => {
      await execPromise(`npx tailwindcss -i ${input} -o ${output}`);
    });
  },
});

export default tailwindcssPlugin;
