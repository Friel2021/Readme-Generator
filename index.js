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
    name: "description",
    message: "Give me a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What do you need to install in order for your application to work?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How does a user contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["MIT", "Apache 2.0", "Mozilla 2.0"],
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
];

function writeToFile(filename, data) {
  fs.writeFile("GENERATEDREADME.md", data, (err) => {
    err ? console.log(err) : console.log("File was written!!!");
  });
}

// Function call to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    writeToFile("GENERATEDREADME.md", generateMarkdown(data));
  });
}

init();
