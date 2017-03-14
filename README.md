# Account Server Prototype
This is a (very) simple web server project that allows you to create new accounts and login to existing accounts. Its only purpose was to introduce me to JavaScript, Node.js, npm packages, jQuery, and PostgreSQL.

## Install
1. Run `npm install` inside the root directory to pull the necessary packages.
2. [Download and install PostgreSQL](https://www.postgresql.org/download/)
3. Create a new database named `postgres`.
  1. Add a new table named `users`.
  2. Add 2 columns: `email` and `password` of type `varchar` to the `users` table.

## Run
1. Run `node index.js` from the root directory.
2. Go to [http://localhost:3000/](http://localhost:3000/) in your browser.
3. Type in a username and password and click `Create Account` to add an account to the database.
4. Type in an existing username and password and click `Login` to validate your password against the one in the database.
