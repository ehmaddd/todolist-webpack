const taskAuth = (taskArr) => {
  const taskText = document.querySelector('#addNew').value;
  let task;

  const arrLength = (taskArr) ? taskArr.length : 0;

  if (taskText !== '') {
    task = {
      description: taskText,
      completed: 'false',
      index: arrLength + 1,
    };
  }
  return (task) || null;
};

export default taskAuth;