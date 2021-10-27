let object = {};
const bookArray = [];
const bookInput = document.querySelector('#txt');
const bookInputOne = document.querySelector('#txtOne');
const addBtn = document.querySelector('.add');
const bookList = document.querySelector('.book-list');
const id = null;

addBtn.addEventListener('click', (e) => {
  object = {};
  if (bookInput.value !== '') {
    e.preventDefault();
    // create li
    const MyBooks = document.createElement('ul');
    const MyList = document.createElement('li');
    const MyListTwo = document.createElement('li');
    const Mybutton = document.createElement('button');
    Mybutton.classList = 'remove_btn';
    Mybutton.setAttribute('id', Math.random().toString(16).slice(2));
    Mybutton.setAttribute('onclick', `${'remoteAt(this.id)'}`);
    MyList.innerHTML = bookInput.value;
    MyListTwo.innerHTML = bookInputOne.value;
    Mybutton.innerHTML = 'Remove';
    MyBooks.appendChild(MyList);
    MyBooks.appendChild(MyListTwo);
    MyBooks.appendChild(Mybutton);
    bookList.appendChild(MyBooks);
    // var input = bookInput.value;
    object[bookInput.value] = bookInputOne.value;
    bookArray.push(object);
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
    console.log(object);
    console.log(bookArray);
    bookInput.value = '';
    bookInputOne.value = '';
  }
});
function remoteAt(id) {
  const element = document.getElementById(id);
  const index = bookArray.findIndex((prop) => prop.id === id);
  bookArray.splice(index, 1);
  element.parentElement.style.display = 'none';
}
remoteAt(id);
