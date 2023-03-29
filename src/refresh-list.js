const refreshList = () => {
  const listUl = document.querySelector('#list-ul');
  if (listUl.hasChildNodes) {
    while (listUl.firstChild) {
      listUl.removeChild(listUl.firstChild);
    }
  }
};

export default refreshList;