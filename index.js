// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please write a short description of your project:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What king of license should you project have?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "(npm i)",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "(npm test)",
  },
  {
    type: "input",
    name: "repoInstructions",
    message: "What does the user need to know about using my repo?",
  },
  {
    type: "input",
    name: "repoContribution",
    message: "What does th user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
}

// Function call to initialize app
init();
