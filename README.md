# 🏗️ Module 11 Mini-Project Remix: Create a Library Application

In this mini-project, you will work with a group to create a library application. You will create routes to get all books, to get a single book, to add a book, and a wildcard route for 404 errors.

* As a developer, I want to be able to create RESTful routes.

* As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

* As a developer, I want to be able to deploy my apps to Heroku.

## Acceptance Criteria

* It's done when the `/` route returns an html page showing all books currently in the library, along with a form to add new books 

* It's done when a `GET` request to  `/api/books` returns all books in JSON format.

* It's done when a `GET` request to  `/api/books/:id` returns the correct book.

* It's done when a `POST` request to  `/api/books` adds a new book the the `books.json` file in the `db` folder.

* It's done when any unhandled `GET` request returns a custom 404 page.  

* It's done when I have deployed the finished application to Heroku.

---

## 💡 Hints

Books should have the following shape:

```javascript
 {
    "id": 1,
    "title":"101 Manatee Jokes",
    "author":"Joe"
 }
 ```

How can we declare a wildcard route in Express.js?


## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

modularize your routes such that `server.js` only contains generic code.

Add in a `.json` file and routes to handle library patrons.  patrons should have the following format:

```javascript
 {
    "id": 1,
    "name":"Billy",
    "cardNum":12
 }
 ```