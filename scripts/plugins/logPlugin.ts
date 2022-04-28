/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import esbuild from 'esbuild';

const logPlugin = ({
  SERVICE,
  VERSION,
  BROWSER,
}: {
  SERVICE: string;
  VERSION: string;
  BROWSER: string;
}): esbuild.Plugin => ({
  name: 'log',
  setup: (build) => {
    build.onStart(() => {
      const now = `[\x1b[90m${new Date().toLocaleTimeString()}\x1b[39m]`;
      const meta = `[\x1b[90m${SERVICE} ${BROWSER} v${VERSION}\x1b[39m]`;
      console.log(`${now} ${meta} Build started`);
    });
    build.onEnd(() => {
      const now = `[\x1b[90m${new Date().toLocaleTimeString()}\x1b[39m]`;
      const meta = `[\x1b[90m${SERVICE} ${BROWSER} v${VERSION}\x1b[39m]`;
      console.log(`${now} ${meta} Build finished`);
    });
  },
});

export default logPlugin;
