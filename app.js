const id = null;
const bookInput = document.querySelector('#txt');
const bookInputOne = document.querySelector('#txtOne');
const addBtn = document.querySelector('.add');
const bookList = document.querySelector('.book-list');
let bookArray = JSON.parse(localStorage.getItem('bookArray'));
class Books {
  constructor(id, booksName, booksAu) {
    this.booksName = booksName;
    this.booksAu = booksAu;
    this.id = id;
  }

  static display() {
    bookList.innerHTML = '';
    bookArray.forEach((element) => {
      const MyBooks = document.createElement('ul');
      const MyList = document.createElement('li');
      const MyListTwo = document.createElement('li');
      const Mybutton = document.createElement('button');
      Mybutton.classList = 'remove_btn';
      MyBooks.classList = 'my_book_back';
      Mybutton.setAttribute('id', element.id);
      Mybutton.setAttribute('onclick', `${'Books.remoteAt(this.id)'}`);
      MyList.innerHTML = `''${element.booksName}'' by`;
      MyListTwo.innerHTML = element.booksAu;
      Mybutton.innerHTML = 'Remove';
      MyBooks.appendChild(MyList);
      MyBooks.appendChild(MyListTwo);
      MyBooks.appendChild(Mybutton);
      bookList.appendChild(MyBooks);
      bookInput.value = '';
      bookInputOne.value = '';
      const myBooksFinal = document.getElementsByClassName('my_book_back');
      for (let i = 0; i < myBooksFinal.length; i += 1) {
        if (i % 2 !== 0) {
          myBooksFinal[i].setAttribute('style', 'background-color: black');
        }
        if (i % 2 === 0) {
          myBooksFinal[i].setAttribute('style', 'background-color: rgb(7, 3, 59)');
        }
      }
    });
    localStorage.clear();
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  static remoteAt(id) {
    const element = document.getElementById(id);
    const index = bookArray.findIndex((prop) => prop.id === id);
    bookArray.splice(index, 1);
    element.parentElement.style.display = 'none';
    Books.display();
  }
}
if (bookArray == null) {
  bookArray = [];
}
addBtn.addEventListener('click', (e) => {
  if (bookInput.value !== '') {
    e.preventDefault();
    const object = new Books(Math.random().toString(16).slice(2),
      bookInput.value, bookInputOne.value);
    bookArray.push(object);
    Books.display();
  }
});
window.addEventListener('load', () => {
  Books.display();
  Books.remoteAt(id);
});

const now = new Date();
const dateTime = document.querySelectorAll('span');
for (let i = 0; i < dateTime.length; i += 1) {
  dateTime[i].innerHTML = now.toString();
}
dateTime.innerHTML = now.toString();

const list = document.querySelector('#list');
const addNew = document.querySelector('#add');
const Contact = document.querySelector('#cont_txt');
const listPage = document.querySelector('.list_page');
const addNewPage = document.querySelector('.new_list');
const ContactPage = document.querySelector('.contact_page');
addNewPage.setAttribute('style', 'display: none');
ContactPage.setAttribute('style', 'display: none');
list.addEventListener('click', () => {
  listPage.setAttribute('style', 'display: flex');
  addNewPage.setAttribute('style', 'display: none');
  ContactPage.setAttribute('style', 'display: none');
});
addNew.addEventListener('click', () => {
  addNewPage.setAttribute('style', 'display: flex');
  listPage.setAttribute('style', 'display: none');
  ContactPage.setAttribute('style', 'display: none');
});
Contact.addEventListener('click', () => {
  ContactPage.setAttribute('style', 'display: flex');
  addNewPage.setAttribute('style', 'display: none');
  listPage.setAttribute('style', 'display: none');
});