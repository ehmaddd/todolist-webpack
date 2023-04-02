import './style.css';
import populateList from './populatelist.js';
import taskAuth from './taskauth.js';
import statusUpdate from './status_update.js';
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
    this.storeLocalStorage();
    this.showData();
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
    taskText.value = '';
  }
});

const listUl = document.querySelector('#list-ul');
const delBttn = document.getElementsByClassName('del-img');
let resArr;

listUl.addEventListener('click', (ev) => {
  const tgt = ev.target;
  if (tgt.tagName === 'INPUT') {
    statusUpdate(ev, todo.check, todo.taskArr);
  } else if (tgt.tagName === 'P') {
    const prev = tgt.previousSibling;
    const sibId = prev.id;
    const original = todo.taskArr[sibId].description;
    const change = getPrompt(original);
    if (change === '' || change === ' ' || change === '  ') {
      todo.taskArr[sibId].description = original;
    } else {
      todo.taskArr[sibId].description = change;
      todo.storeLocalStorage();
    }
    todo.loadLocalStorage();
    todo.loadWindow();
  } else if (tgt.tagName === 'A') {
    if (todo.check) {
      todo.check.sort((a, b) => b - a);
      resArr = todo.taskArr.filter((task) => {
        if (task.completed !== 'false') {
          return false;
        }
        return task;
      });
      todo.taskArr = resArr;
      for (let j = 0; j < todo.taskArr.length; j += 1) {
        todo.taskArr[j].index = j + 1;
      }
      todo.storeLocalStorage();
      todo.loadLocalStorage();
      todo.check = [];
      localStorage.setItem('check', JSON.stringify(todo.check));
      todo.loadWindow();
    }
  } else if (tgt.tagName === 'IMG') {
    const prev = tgt.previousSibling;
    const curr = prev.previousSibling;
    todo.taskArr.splice(curr.id, 1);
    for (let j = 0; j < todo.taskArr.length; j += 1) {
      todo.taskArr[j].index = j + 1;
    }
    todo.storeLocalStorage();
    todo.loadWindow();
  }
});

listUl.addEventListener('mouseover', (ev) => {
  if (todo.taskArr.length > 0) {
    document.querySelector('.tooltip').style.visibility = 'visible';
    if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'P' || ev.target.tagName === 'LI' || ev.target.tagName === 'IMG') {
      let liNum;
      if (ev.target.tagName === 'INPUT') {
        liNum = ev.target.id;
      } else if (ev.target.tagName === 'P') {
        liNum = ev.target.previousSibling.id;
      } else if (ev.target.tagName === 'IMG') {
        liNum = ev.target.previousSibling.previousSibling.id;
      } else if (ev.target.tagName === 'LI') {
        liNum = ev.target.firstChild.id;
      } else {
        liNum = -1;
      }
      if (liNum >= 0) {
        if (listUl.children.length > 0) {
          listUl.children.item(liNum).classList.add('active-li');
        }
        if (delBttn) {
          delBttn[liNum].style.visibility = 'visible';
        }
      }
    }
  }
});

listUl.addEventListener('mouseout', (ev) => {
  document.querySelector('.tooltip').style.visibility = '';
  if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'P' || ev.target.tagName === 'LI' || ev.target.tagName === 'IMG') {
    let liNum;
    if (ev.target.tagName === 'INPUT') {
      liNum = ev.target.id;
    } else if (ev.target.tagName === 'P') {
      liNum = ev.target.previousSibling.id;
    } else if (ev.target.tagName === 'IMG') {
      liNum = ev.target.previousSibling.previousSibling.id;
    } else if (ev.target.tagName === 'LI') {
      liNum = ev.target.firstChild.id;
    } else {
      liNum = -1;
    }
    if (liNum >= 0) {
      if (listUl.children.length > 0) {
        listUl.children.item(liNum).classList.remove('active-li');
      }
      if (delBttn) {
        delBttn[liNum].style.visibility = 'hidden';
      }
    }
  }
});

window.addEventListener('load', () => {
  if (todo.check) {
    todo.check.sort((a, b) => b - a);
    const resArr = todo.taskArr.filter((task) => {
      if (task.completed !== 'false') {
        return false;
      }
      return task;
    });
    todo.taskArr = resArr;
    for (let j = 0; j < todo.taskArr.length; j += 1) {
      todo.taskArr[j].index = j + 1;
    }
    todo.storeLocalStorage();
    todo.loadLocalStorage();
    todo.check = [];
    localStorage.setItem('check', JSON.stringify(todo.check));
  }
  todo.loadWindow();
});