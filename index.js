// TODO: Include packages needed for this application
const inquierer = require ('inquirer')
// const fs = require('fs')

// TODO: Create an array of questions for user input

const questions = [
  {
    message: "What title would you like to use for your project?",
    type: "input",
    name: "title",
  },
  {
    message: "What is the description of this project?",
    type: "input",
    name: "description",
  },
  {
    message: "What installation is required for this project?",
    type: "input",
    name: "installation",
  },
  {
    message: "What is the usage for this project?",
    type: "input",
    name: "usage",
  },
  {
    message: "What are the contributors of this project?",
    type: "input",
    name: "contributors",
  },
  {
    message: "What tests are used for this project?",
    type: "input",
    name: "test",
  },
  {
    message: "What license are you using for this project?",
    type: "list",
    choices: ["MIT", "BSD", "Apache", "none"],
    name: "license",
  },
  {
    message: "What is the github user name for this project?",
    type: "input",
    name: "github",
  },
  {
    message: "What is the email used for this project?",
    type: "input",
    name: "email",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquierer.prompt(questions)
.then(response => {
  console.log(response)
})
.catch(err=> console.log(err))

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
