const generateAbout = (aboutText, inputSS) => {
  if(!aboutText) {
    return '';
  }
  return`
  <!-- ABOUT THE PROJECT -->
  ## About The Project

  ![TimeTable](./images/${inputSS})
  ${aboutText}
  `
};

const generateContributors = mvps => {
  return `${mvps.map(({ contributorName, contributorGit }) => {
    return `
    Name: ${contributorName}
    GitHub: ${contributorGit}
    `;})
  .join('')}`;
}

const tocAbout = aboutContent => {
  console.log(aboutContent);
  if(aboutContent == true){
    return`<li><a href="#about-the-project">About The Project</a></li>`
  }
  return '';
};

const tocGettingStarted = gettingStartedContent => {
  console.log(gettingStartedContent);
  if(gettingStartedContent == true){
    return`<li>
    <a href="#getting-started">Getting Started</a>
    <ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    </ul>
    </li>`
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  `;
};

module.exports = templateData => {
  const { contributors, about, ...name } = templateData;
  console.log(templateData);
  
  return `
  <!-- PROJECT TITE -->
  <h1 align="center">${name.name}</h1>
  
  <!-- DESCRIPTION -->
  <p align="center">
  ${name.description}
  </p>
  <!-- TABLE OF CONTENTS -->
  <details open="open">
  <summary>Table of Contents</summary>
  <ol>
  ${tocAbout(name.confirmAbout)}
  <li><a href="#built-with">Built With</a></li>
  ${tocGettingStarted(name.confirmGettingStarted)}
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
  </details>
  
  ${generateAbout(about, name.inputSS)}
  
  ### Built With

  ${name.languages}
  
  <!-- GETTING STARTED -->
  ## Getting Started
  
  ### Prerequisites

  ${name.preRequisites}

  ### Installation 

  ${name.installation}
  
  <!-- CONTRIBUTING -->
  ## Contributing
  ${generateContributors(contributors)}
  <!-- LICENSE -->
  ## License

  ${name.listLicense}
  
  <!-- CONTACT -->
  ## Contact
  
  Said Hadad - saiddavid.hadad@gmail.com
  
  Project Link: [https://github.com/SaidHadad/Challenge-6-Server-Side-APIs](https://github.com/SaidHadad/Challenge-6-Server-Side-APIs)
  
  Live Page: [https://saidhadad.github.io/Challenge-6-Server-Side-APIs/](https://saidhadad.github.io/Challenge-6-Server-Side-APIs/)
  
  `;
};