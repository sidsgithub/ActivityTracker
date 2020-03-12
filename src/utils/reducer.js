export const createNamespace = namespace => action => {
  return `${namespace}:${action}`;
};
