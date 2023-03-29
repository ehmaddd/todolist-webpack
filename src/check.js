const checkBox = (checkId) => {
  const testTask = document.querySelectorAll('.test-task');
  testTask[checkId].style.textDecoration = 'line-through';
};

export default checkBox;