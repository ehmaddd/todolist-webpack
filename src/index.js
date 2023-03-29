import './style.css';
import populateList from './populatelist.js';
import taskAuth from './taskauth.js';
import checkBox from './check.js';
import uncheckBox from './uncheck.js';
import getPrompt from './getNewValue.js';

class ToDo {
  constructor() {
    if (localStorage.length > 0) {
      this.taskArr = JSON.parse(localStorage.getItem('taskList'));
    } else {
      this.taskArr = [];
    }
    this.check = [];
  }

  // add task to list
  addTask() {
    const task = taskAuth(this.taskArr);
    if (task) {
      if (this.taskArr) {
        this.taskArr.push(task);
      } else {
        this.taskArr = [];
        this.taskArr.push(task);
      }
    }
  }

  // store data in local storage
  storeLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskArr));
  }

  // show data in the list
  showData() {
    populateList(this.taskArr);
  }

  // get data from local storage and store in array
  loadLocalStorage() {
    if (localStorage.length > 0) {
      this.taskArr = JSON.parse(localStorage.getItem('taskList'));
    }
  }

  // load data from local storage on window load and show
  loadWindow() {
    this.loadLocalStorage();
    this.showData();
  }
}

const todo = new ToDo();

// to insert data into array
const taskText = document.querySelector('#addNew');
taskText.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') {
    todo.addTask();
    todo.storeLocalStorage();
    todo.showData();
    window.location.reload();
  }
});

// add event listener to checkbox
const addCheckboxEvent = () => {
  const check = document.querySelectorAll('.check-task');
  for (let i = 0; i < check.length; i += 1) {
    check[i].addEventListener('click', (ev) => {
      const checkId = ev.target.id;
      const checkCheck = ev.target.checked;
      if (checkCheck === true) {
        todo.check.push(checkId);
        checkBox(checkId);
      } else if (checkCheck === false) {
        const index = todo.taskArr.indexOf(checkId);
        todo.check.splice(index, 1);
        uncheckBox(checkId);
      }
    });
  }
};

const addChecktext = () => {
  const testP = document.querySelectorAll('.test-task');
  for (let i = 0; i < testP.length; i += 1) {
    testP[i].addEventListener('click', () => {
      const original = todo.taskArr[i].description;
      const change = getPrompt(original);
      if (change === '' || change === ' ' || change === '  ') {
        todo.taskArr[i].description = original;
      } else {
        todo.taskArr[i].description = change;
        todo.storeLocalStorage();
      }
      window.location.reload();
    });
  }
};

const addDeleteBtn = () => {
  const delBtn = document.querySelectorAll('.delete-btn');
  for (let i = 0; i < delBtn.length; i += 1) {
    delBtn[i].addEventListener('click', () => {
      todo.taskArr.splice(i, 1);
      todo.storeLocalStorage();
      window.location.reload();
    });
  }
};

window.addEventListener('load', () => {
  todo.loadWindow();
  addCheckboxEvent();
  addChecktext();
  addDeleteBtn();
});

const todoList = document.querySelector('#list-ul');
todoList.addEventListener('mouseover', () => {
  document.querySelector('.tooltip').style.visibility = 'visible';
});

todoList.addEventListener('mouseout', () => {
  document.querySelector('.tooltip').style.visibility = '';
});