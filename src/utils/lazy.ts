const lazy = (fn: () => unknown) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      const result = fn();
      if (result instanceof Promise) {
        result.then(resolve);
      } else {
        resolve();
      }
    }, 0);
  });
export default lazy;
