// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please describe the installation process of your project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please describe the usage of your project.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please list your contributors.',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'Please choose the license you used.',
      name: 'license',
      choices: ['Apache', 'MIT', 'Mozilla', 'none'],
    },
    {
      type: 'input',
      message: 'Please list any tests, if applicable.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please give your github username.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please give your email.',
      name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('README written!');
})
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();
