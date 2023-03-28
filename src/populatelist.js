const list = document.querySelector('#to-do-list');
const listUl = document.querySelector('#list-ul');

const populateList = (taskArr) => {
  for (let i = 0; i < taskArr.length; i += 1) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add('task-check');
    check.style.marginRight = '2%';
    const task = document.createTextNode('p');
    task.textContent = taskArr[i].description;
    li.appendChild(check);
    li.appendChild(task);
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
};

export default populateList;