# Polling system API
  This is a backend api for creating questions and adding options to a specific question. Options can be voted. Questions, options can be deleted and questions can be viewed with all of their options.


# Installation and Run 
  Follow these steps:
  - Get the code on your system.
  - Open terminal on your pc and navigate to the root directory of the project.
  - Run "npm install" command inside the terminal to install all the required dependencies.
  - Create a '.env' file inside root directory and define values for
      - PORT ( Port on which your project will run )
      - DB_URL ( URL of your mongoDB database for connecting to database )
  - Run 'npm start' / 'npm index.js' command inside terminal to run the code.
  - Connect to the API using Postman on port that you have declared in .env file.

# API Endpoints
| HTTP Verbs | Endpoints                          | Action                                 |
| ---------- | -----------------------------------| -------------------------------------- |
| POST       | /questions/create                  | To create a  question                  |
| POST       | /questions/:id/options/create      | To add options to a specific question  |
| DELETE     | /questions/:id/delete              | To delete a question                   |
| DELETE     | /options/:id/delete                | To delete an option                    |
| PUT        | /options/:id/add_vote              | To increase the count of votes         |
| GET        | /questions/:id                     | To view a question and its options     |

# Features
  - Create questions
  - Add options to question
  - Delete a question
  - Delete an option
  - Add vote to an option
  - View a question with all of its options

# Tools used:
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongoose ODM

