export const exec = (text: string): void => {
  const th = document.head;
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.textContent = `${text}`;
  th.appendChild(script);
  th.removeChild(script);
};
