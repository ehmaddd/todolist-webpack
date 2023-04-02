import checkBox from './check.js';
import uncheckBox from './uncheck.js';

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