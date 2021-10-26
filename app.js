var object = {};
var bookArray = [];
const book_input = document.querySelector("#txt");
const book_input_one = document.querySelector("#txtOne");
const add_btn = document.querySelector(".add");
const book_list = document.querySelector(".book-list");
add_btn.addEventListener("click", (e) => {
  object = {};
  if (book_input.value != "") {
    e.preventDefault();
    // create li
    const MyBooks = document.createElement("ul");
    const MyList = document.createElement("li");
    const MyListTwo = document.createElement("li");
    const Mybutton = document.createElement("button");
    Mybutton.classList = "remove_btn";
    Mybutton.setAttribute("id", Math.random().toString(16).slice(2));
    Mybutton.setAttribute("onclick", "remoteAt(this.id)");
    MyList.innerHTML = book_input.value;
    MyListTwo.innerHTML = book_input_one.value;
    Mybutton.innerHTML = "Remove";
    MyBooks.appendChild(MyList);
    MyBooks.appendChild(MyListTwo);
    MyBooks.appendChild(Mybutton);
    book_list.appendChild(MyBooks);
    var input = book_input.value;
    object[input] = book_input_one.value;
    bookArray.push(object);
    localStorage.setItem("bookArray", JSON.stringify(bookArray));
    console.log(object);
    console.log(bookArray);
    book_input.value = "";
    book_input_one.value = "";
  }
  console.log(object);
  console.log(bookArray);
  const remove = document.querySelectorAll(".remove_btn");
});

function remoteAt(id) {
  const element = document.getElementById(id);
  const index = bookArray.findIndex((prop) => prop.id === id);
  bookArray.splice(index, 1);
  element.parentElement.style.display = "none";
}
