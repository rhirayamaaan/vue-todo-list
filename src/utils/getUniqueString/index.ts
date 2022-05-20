export const getUniqueString = (): string =>
  new Date().getTime().toString(16) +
  Math.floor(1000 * Math.random()).toString(16);
