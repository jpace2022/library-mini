// add front end scripting here!
const booksUl = document.querySelector("#allBooks");
const bookForm = document.querySelector("#newBook");
const bookIdInput = document.querySelector("#bookId");
const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");

fetch("/api/books").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(book => {
        const bookLi = document.createElement("li");
        bookLi.innerHTML=`<strong>${book.id}.</strong> <em>${book.title}</em> by ${book.author}`;
        booksUl.append(bookLi);
    });
})


bookForm.addEventListener("submit", e=>{
    e.preventDefault();
    const bookData = {
        id: parseInt(bookIdInput.value),
        title: bookTitleInput.value,
        author: bookAuthorInput.value,
    }
    console.log(bookData);
    fetch("/api/books", {
        method:"POST",
        body:JSON.stringify(bookData),
        header:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok) {
            location.reload()
        } else {
            alert("trumpet sound")
        }      
    })
})