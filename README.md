# Looking-For-A-Book

## Overview

This project is a web application that provides users with a book search engine. The application was originally built with a RESTful API using the MERN stack (MongoDB, Express.js, React, Node.js). In this assignment, the goal is to refactor the application to use GraphQL instead of the existing RESTful API, with the help of Apollo Server.

The project focuses on allowing users to search for books using the Google Books API, save their favorite books, and view their saved books. Authentication and user account management are also part of the application.

## Challenges and Acceptance Criteria

The following acceptance criteria:
```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Key Features
- Search for Books: Users can search for books using keywords and view search results including book details and external links.
- Authentication: Users can sign up and log in to their accounts to access personalized features.
- Save Books: Logged-in users can save their favorite books to their accounts for later reference.
- View Saved Books: Users can view a list of their saved books with detailed information.
- Remove Books: Users can remove books from their saved list if they no longer wish to keep them.


## Usage

1. Visit the deployed site.
2. Search for books using the input field and submit button.
3. Sign up for a new account or log in to your existing account.
4. Save books to your account by clicking the "Save" button.
5. View your saved books and remove books if needed.

## Installation

To run this project locally:

1. Clone the repository to your local machine.
2. Run `npm install` in the command line to install dependencies.
3. Set up your environment variables in a `.env` file.
4. Run the server using `npm start`.
5. Access the application via a web browser.

## License

This project is licensed under the terms of the MIT license.
