const uncheckBox = (checkId) => {
  const testTask = document.querySelectorAll('.test-task');
  testTask[checkId].style.textDecoration = null;
};

export default uncheckBox;