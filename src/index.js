import './style.css';
import populateList from './populatelist.js';

const taskArr = [
  {
    description: 'Have lunch',
    completed: false,
    index: 1,
  },
  {
    description: 'Do yoga',
    completed: true,
    index: 2,
  },
  {
    description: 'Drink green tea',
    completed: false,
    index: 3,
  },
];

populateList(taskArr);