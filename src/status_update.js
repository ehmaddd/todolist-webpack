const checkBox = (checkId) => {
  const testTask = document.querySelectorAll('.test-task');
  const clearComplete = document.querySelector('.clear-complete');
  testTask[checkId].style.textDecoration = 'line-through';
  clearComplete.classList.add('clear-active');
};

const uncheckBox = (checkId, checkArr) => {
  const testTask = document.querySelectorAll('.test-task');
  const clearComplete = document.querySelector('.clear-complete');
  testTask[checkId].style.textDecoration = null;
  if (checkArr.length <= 0) {
    clearComplete.classList.remove('clear-active');
  }
};

const statusUpdate = (ev, checkArr, taskArr) => {
  const checkId = ev.target.id;
  const checkCheck = ev.target.checked;
  if (checkCheck === true) {
    checkArr.push(checkId);
    localStorage.setItem('check', JSON.stringify(checkArr));
    taskArr[checkId].completed = 'true';
    localStorage.setItem('taskList', JSON.stringify(taskArr));
    checkBox(checkId);
  } else if (checkCheck === false) {
    const index = checkArr.indexOf(checkId);
    checkArr.splice(index, 1);
    localStorage.setItem('check', JSON.stringify(checkArr));
    taskArr[checkId].completed = 'false';
    localStorage.setItem('taskList', JSON.stringify(taskArr));
    uncheckBox(checkId, checkArr);
  }
};
export default statusUpdate;