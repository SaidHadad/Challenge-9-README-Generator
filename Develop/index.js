// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateReadme = require('./Develop/utils/generateMarkdown.ks')
// const {name of functions} this if i need to writefile or copyfile.

// TODO: Create an array of questions for user input
// first function for the proyect name and description
const readmeHeader = () => {
  console.log(`
  --------------------------------------------
    Welcome to profesional README generator
  --------------------------------------------
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your proyect? (REQUIRED)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project (required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        }
        else {
          console.log('Please enter a Project description!');
          return false;
        }
      }
    }
  ]);
};
// second function for the table of contents information. This includes:
// About, Built with, Getting Started, Usage, Licence and Contact.
const tableOfContents = () => {
  console.log(`
---------------------
  Table of Contents
---------------------
`);
  return inquirer.prompt ([
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about your proyect for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about your proyect:',
      when: ({confirmAbout}) => {
        if (confirmAbout) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'Select the languages used on your project',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'confirm',
      name: 'confirmGettingStarted',
      message: 'Would you like to crate a prerequisites and installation section?',
      default: true
    },
    {
      type: 'input',
      name: 'preRequisites',
      message: 'Provide the prerquisites needed by your project:',
      when: ({confirmGettingStarted}) => {
        if (confirmGettingStarted) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your project',
      when: ({confirmGettingStarted}) => {
        if (confirmGettingStarted) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmifContributors',
      message: 'Would you like to mention any contributor for your proyect?',
    }
  ])
  .then((answers) => {
    if (answers.confirmifContributors) {
      console.log(answers);
      return proyectContributors(answers);
    }
  })
};

const proyectContributors = contributorsData => {
  if (!contributorsData.contributors) {
    contributorsData.contributors = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'contributorName',
      message: 'What is the name of your contributor?',
      validate: contributorInput => {
        if (contributorInput) {
          return true;
        }
        else {
          console.log('Please enter your contributor name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributorGit',
      message: 'What is your contributor GitHub username?',
      validate: contributorGitInput => {
        if (contributorGitInput) {
          return true;
        }
        else {
          console.log('Please enter contributor GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddContributor',
      message: 'Would you like to enter another contributor?',
      default: false
    }
  ])
  .then(contributor => {
    contributorsData.contributors.push(contributor);
    if (contributor.confirmAddContributor) {
      return proyectContributors(contributorsData);
    }
    else {
      console.log(contributorsData);
      return contributorsData;
    }
  })
};
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  readmeHeader()
    .then(tableOfContents);
}

// Function call to initialize app
init();
