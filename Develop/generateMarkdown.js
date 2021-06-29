// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
};

module.exports = templateData => {
  const projectInfo = {
    name: templateData.name,
    description: templateData.description,
    about: templateData.about,
    image: templateData.inputss
  }

  const projectSpecifications = {
    languages: templateData.languages,
    prerequisites: templateData.prerequisites,
    installation: templateData.installation,
    license: templateData.listLicense
  }

  const projectCollaborators = {
    listLicense: templateData.listLicense,
    contactname: templateData.InputContactName,
    contactemail: templateData.ContactEmail,
    contactgit: templateData.ContactGit
  }

  const projectContributors = {
    contributors: contributors;
  }
}
