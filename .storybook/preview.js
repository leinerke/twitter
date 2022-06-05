import '../src/styles/globals.css';

document.documentElement.style.setProperty(
  '--doc-height',
  `${window.innerHeight}px`,
);

window.addEventListener('resize', () => {
  console.log('hola');
  document.documentElement.style.setProperty(
    '--doc-height',
    `${window.innerHeight}px`,
  );
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
