import refreshList from './refresh-list.js';
import Icon from './recycle.png';

const list = document.querySelector('#to-do-list');
const listUl = document.querySelector('#list-ul');

const populateList = (taskArr) => {
  const length = (taskArr) ? taskArr.length : 0;
  if (length > 0) {
    refreshList();
    for (let i = 0; i < taskArr.length; i += 1) {
      const liMain = document.createElement('li');

      const task = document.createElement('p');
      task.textContent = taskArr[i].description;
      task.classList.add('test-task');

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.classList.add('check-task');
      check.id = i;
      check.style.marginRight = '2%';

      const delButton = document.createElement('img');
      delButton.src = Icon;
      delButton.style.visibility = 'hidden';
      delButton.classList.add('del-img');

      liMain.appendChild(check);
      liMain.appendChild(task);
      liMain.appendChild(delButton);
      listUl.appendChild(liMain);
    }
    const li = document.createElement('li');
    const clearComplete = document.createElement('a');
    clearComplete.setAttribute.src = '#';
    clearComplete.textContent = 'Clear all completed';
    li.classList.add('clear-complete');
    clearComplete.id = 'clear-all-completed';

    li.appendChild(clearComplete);
    listUl.appendChild(li);
    list.appendChild(listUl);
    document.body.appendChild(list);
  } else {
    const li = document.createElement('li');
    const warn = document.createTextNode('p');
    warn.textContent = 'No task found';
    refreshList();
    li.appendChild(warn);
    listUl.appendChild(li);
  }
};

export default populateList;