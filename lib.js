// This function represents a Book object constructor
function Book(title, author, pages, category) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.category = category;
}

// Get the button element with the id "button"
let btn = document.getElementById("button");

// Get the unordered list element with the id "book-list"
const elementUl = document.getElementById("book-list");

// Create an empty array to store Book objects
let books = [];

// This function adds a new book to the list and displays it on the page
function addElement(book) {
  // Create elements for the book details
  let elementTitle = document.createElement("p");
  let elementAuthor = document.createElement("p");
  let elementPages = document.createElement("p");
  let elementCategory = document.createElement("p");
  let deleteButton = document.createElement("button");

  // Create a list item element to hold the book details
  let bookElement = document.createElement("li");

  // Create text nodes with the book details
  let titleContent = document.createTextNode("Title:" + " " + book.title);
  let authorContent = document.createTextNode("Author:" + " " + book.author);
  let pagesContent = document.createTextNode("Pages:" + " " + book.pages);
  let categoryContent = document.createTextNode(
    " Category:" + " " + book.category
  );

  // Set up the delete button
  deleteButton.innerText = "Delete Book";
  deleteButton.setAttribute("data-title", book.title);

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", deleteBooks);

  // Append the book details and delete button to the list item
  elementTitle.appendChild(titleContent);
  elementAuthor.appendChild(authorContent);
  elementPages.appendChild(pagesContent);
  elementCategory.appendChild(categoryContent);

  bookElement.appendChild(elementTitle);
  bookElement.appendChild(elementAuthor);
  bookElement.appendChild(elementPages);
  bookElement.appendChild(elementCategory);
  bookElement.appendChild(deleteButton);

  // Append the list item to the unordered list
  elementUl.appendChild(bookElement);
}

// This function handles the deletion of a book
function deleteBooks(event) {
  event.preventDefault();
  let titleToDelete = event.target.getAttribute("data-title");

  // Find the index of the book to delete in the books array
  let indexToDelete = books.findIndex((book) => book.title === titleToDelete);

  // If the book is found, remove it from the array and update the displayed books
  if (indexToDelete !== -1) {
    books.splice(indexToDelete, 1);
    displayBooks();
  }
}

// This function displays all books in the array on the page
function displayBooks() {
  elementUl.innerHTML = ""; // Clear existing content

  for (const book of books) {
    addElement(book);
  }
}

// This function handles the form submission
function submitForm(event) {
  event.preventDefault();

  // Get form input values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let categorySelect = document.getElementById("category");
  let category = categorySelect.options[categorySelect.selectedIndex].text;

  // Create a new Book object
  let book = new Book(title, author, pages, category);

  // Add the book to the array and display it on the page
  books.push(book);
  displayBooks();
}

// Add a click event listener to the submit button to handle form submission
btn.addEventListener("click", submitForm);

// Log the current state of the books array to the console
console.log(books);
