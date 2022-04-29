const onKeyDownHandler = (e: React.KeyboardEvent<HTMLElement>) => {
  if (e.key === 'Enter') {
    e.currentTarget.click();
  }
};

export default onKeyDownHandler;
