const getPrompt = (or) => {
  // eslint-disable-next-line no-alert
  const newValue = prompt('Enter new value', or);
  return newValue;
};

export default getPrompt;