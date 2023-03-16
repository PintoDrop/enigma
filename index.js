const fs = require("fs");
const path = require("path");
let inquierer = require("inquirer");
let generateMarkdown = require("./utils/generateMarkdown");

let questions = [
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
    message: "What is the usage of this project?",
    type: "input",
    name: "usage",
  },
  {
    message: "Who are the contributors of this project?",
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
    choices: ["MIT", "BSD", "Apache", "Refer to the Repo License", "none"],
    name: "license",
  },
  {
    message: "What is the github user name for this project?",
    type: "input",
    name: "github",
  },
  {
    message: "What is the email you wish to use to be contacted about this project?",
    type: "input",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquierer
    .prompt(questions)
    .then((response) => {
      return writeToFile("README-EX.md", generateMarkdown({ ...response }));
    })
    .catch((err) => console.log(err));
}

init();
