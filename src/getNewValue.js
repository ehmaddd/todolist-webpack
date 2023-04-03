const getPrompt = (originalValue) => {
  // eslint-disable-next-line no-alert
  const newValue = prompt('Enter new value', originalValue);
  let value;
  if (newValue) {
    value = newValue;
  } else {
    value = originalValue;
  }
  return value;
};

export default getPrompt;