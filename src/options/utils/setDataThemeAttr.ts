const setDataThemeAttr = (newTheme: Theme) => {
  if (newTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

export default setDataThemeAttr;
