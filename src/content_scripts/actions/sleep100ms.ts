const sleep100ms = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });

export default sleep100ms;
