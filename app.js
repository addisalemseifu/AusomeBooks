
var object = {};
var bookArray = [];
const book_input = document.querySelector('#txt');
const book_input_one = document.querySelector('#txtOne');
const add_btn = document.querySelector('.add');
const book_list = document.querySelector('.book-list')
add_btn.addEventListener('click', (e)=>{
    object = {};
    if(book_input.value != "") {
        e.preventDefault();
        // create li
        const MyBooks = document.createElement('ul');
        const MyList = document.createElement('li');
        const MyListTwo = document.createElement('li');
        const Mybutton = document.createElement('button');
        Mybutton.classList = "remove_btn";
        MyList.innerHTML = book_input.value;
        MyListTwo.innerHTML = book_input_one.value;
        Mybutton.innerHTML = "Remove";
        MyBooks.appendChild(MyList);
        MyBooks.appendChild(MyListTwo);
        MyBooks.appendChild(Mybutton);
        book_list.appendChild(MyBooks);
        var input = book_input.value;
        object[input] = book_input_one.value;
        localStorage.setItem("bookArray", JSON.stringify(bookArray));
        bookArray.push(object);
        console.log(object);
        console.log(bookArray);
        book_input.value = "";
        book_input_one.value = "";
    }
    console.log(object);
    console.log(bookArray);
    const remove = document.querySelectorAll('.remove_btn');
    for(let i = 0; i < remove.length; i++){
        

        remove[i].addEventListener('click', ()=> {
            // bookArray.splice(bookArray[i],1);
            bookArray.splice(i,1);
            remove[i].parentElement.style.display = "none";
            // var removed = bookArray[i];
            // delete object;
            console.log(bookArray);
            console.log(object);
        })
    }
})
console.log(object);