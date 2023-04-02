const uncheckBox = (checkId, checkArr) => {
  const testTask = document.querySelectorAll('.test-task');
  const clearComplete = document.querySelector('.clear-complete');
  testTask[checkId].style.textDecoration = null;
  if (checkArr.length <= 0) {
    clearComplete.classList.remove('clear-active');
  }
};

export default uncheckBox;