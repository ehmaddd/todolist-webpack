const checkBox = (checkId) => {
  const testTask = document.querySelectorAll('.test-task');
  const clearComplete = document.querySelector('.clear-complete');
  testTask[checkId].style.textDecoration = 'line-through';
  clearComplete.classList.add('clear-active');
};

export default checkBox;