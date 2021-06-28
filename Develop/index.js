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
      type: 'confirm',
      name: 'confirmSS',
      message: 'Would you like to use an image to represent the project (save it in utils folder)?',
      default: true
    },
    {
      type: 'input',
      name: 'inputSS',
      message: 'Whats the name and extention of your image?',
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
      name: 'confirmLicence',
      message: 'Would you like to add a Licence to the README?',
      default: false
    },
    {
      type: 'list',
      name: 'listLicence',
      message: 'Select the licence:',
      choices: ['Academic Free License v3.0',
                'Apache license 2.0',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license',
                'BSD 3-clause "New" or "Revised" license',
                'BSD 3-clause Clear license',
                'Creative Commons license family',
                'Creative Commons Zero v1.0 Universal',
                'Creative Commons Attribution 4.0',
                'Creative Commons Attribution Share Alike 4.0',
                'Do What The F*ck You Want To Public License',
                'Educational Community License v2.0',
                'Eclipse Public License 1.0',
                'Eclipse Public License 2.0',
                'European Union Public License 1.1',
                'GNU Affero General Public License v3.0',
                'GNU General Public License family',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License family',
                'GNU Lesser General Public License v2.1',
                'GNU Lesser General Public License v3.0',
                'ISC',
                'LaTeX Project Public License v1.3c',
                'Microsoft Public License',
                'MIT',
                'Mozilla Public License 2.0',
                'Open Software License 3.0',
                'PostgreSQL License',
                'SIL Open Font License 1.1',
                'University of Illinois/NCSA Open Source License',
                'The Unlicense',
                'zLib License'],
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
      name: 'confirmContact',
      message: 'Would you like to crate a Contact and Questions section?',
      default: true
    },
    {
      type: 'input',
      name: 'inputContactName',
      message: 'What is your name?:',
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
      name: 'inputContactEmail',
      message: 'What is your email?:',
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
      name: 'inputContacGit',
      message: 'What is your GitHub username?:',
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
