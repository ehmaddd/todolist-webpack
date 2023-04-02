const getPrompt = (or) => {
  // eslint-disable-next-line no-alert
  const newValue = prompt('Enter new value', or);
  let value;
  if (newValue) {
    value = newValue;
  } else {
    value = or;
  }
  return value;
};

export default getPrompt;