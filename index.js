// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "Github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    name: "description",
    message: "Give me a brief description of your project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["MIT", "Apache 2.0", "Mozilla 2.0"],
  },
  {
    type: "input",
    name: "Installation",
    message: "What commands should we run for dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "contribution",
    message: "How does a user contribute to this project?",
  },
];

function writeToFile(filename, data) {
  fs.writeFile("README.md", data, (err) => {
    err ? console.log(err) : console.log("File was written!!!");
  });
}

// Function call to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

init();
