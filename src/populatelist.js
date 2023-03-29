import refreshList from './refresh-list.js';

const list = document.querySelector('#to-do-list');
const listUl = document.querySelector('#list-ul');

const populateList = (taskArr) => {
  const length = (taskArr) ? taskArr.length : 0;
  if (length > 0) {
    refreshList();
    for (let i = 0; i < taskArr.length; i += 1) {
      const li = document.createElement('li');

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.classList.add('check-task');
      check.id = i;
      check.style.marginRight = '2%';

      const task = document.createElement('p');
      task.textContent = taskArr[i].description;
      task.classList.add('test-task');

      const delButton = document.createElement('a');
      delButton.textContent = 'Delete';
      delButton.classList.add('delete-btn');

      li.appendChild(check);
      li.appendChild(task);
      li.appendChild(delButton);
      listUl.appendChild(li);
    }
    const li = document.createElement('li');
    const clearComplete = document.createElement('a');
    clearComplete.setAttribute.src = '#';
    clearComplete.textContent = 'Clear all completed';
    li.classList.add('clear-complete');

    li.appendChild(clearComplete);
    listUl.appendChild(li);
    list.appendChild(listUl);
  } else {
    const li = document.createElement('li');
    const warn = document.createTextNode('p');
    warn.textContent = 'No task found';
    li.appendChild(warn);
    listUl.appendChild(li);
  }
};

export default populateList;