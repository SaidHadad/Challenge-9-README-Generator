const generateBadge = licensename => {
  if (!licensename) {
    return '';
  }
  switch (licensename) {
    case "Apache license 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case "BSD 2-clause Simplified license":
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case "BSD 3-clause Clear license":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "Creative Commons Zero v1.0 Universal":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    case "Do What The F*ck You Want To Public License":
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    case "Eclipse Public License 1.0":
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    case "GNU General Public License v2.0":
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    case "GNU General Public License v3.0":
      return `[[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "GNU Lesser General Public License v3.0":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "Public Domain Dedication and License":
      return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
    case "SIL Open Font License 1.1":
      return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
    case "The Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    case "zLib License":
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
  }
};

const generateAbout = (aboutText, inputSS) => {
  if(!aboutText) {
    return '';
  }
  return`
  <!-- ABOUT THE PROJECT -->
  ## About The Project

  ![TimeTable](./Develop/images/${inputSS})<br>
  ${aboutText}`
};

const generateContributors = mvps => {
  if(!mvps) {
    return '';
  }
  return `
  ## Contributing
  ${mvps.map(({ contributorName, contributorGit }) => {
    return `
    Name: ${contributorName}
    GitHub: https://github.com/${contributorGit}
    `;})
  .join('')}`;
};

const generateContact = (name,email,git) => {
  console.log(name, email, git);
  if(!name) {
    return '';
  }
  return`
  ## Contact
  Name: ${name} <br>
  Email: ${email} <br>
  GIT: https://github.com/${git} <br>
  `
};

const generateGettingStarted = (requisites, install) => {
  if(!requisites) {
    return '';
  }
  return`
  ## Getting Started

  ### Prerequisites

  ${requisites}

  ### Installation

  ${install}`
}

const generateLicense = license => {
  if (!license) {
    return '';
  }
  return`
  ## License

  ${license}`
}

const tocAbout = aboutContent => {
  if(aboutContent == true){
    return`<li><a href="#about-the-project">About The Project</a></li>`
  }
  return '';
};

const tocContributors = tocmvps => {
  if(tocmvps == true){
    return`<li><a href="#contributing">Contributing</a></li>`
  }
  return '';
};

const tocLicense = License => {
  if(License == true){
    return`<li><a href="#license">License</a></li>`
  }
  return '';
};

const tocContact = tocContact => {
  if(tocContact == true){
    return`<li><a href="#contact">Contact</a></li>`
  }
  return '';
};

const tocGettingStarted = gettingStartedContent => {
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


module.exports = templateData => {
  const { contributors, about, ...name } = templateData;
  console.log(templateData);
  console.log(name.inputContactName);
  console.log(name.inputContactEmail);
  console.log(name.inputContactGit);
  
  return `
  <!-- PROJECT TITE -->
  ${generateBadge(name.listLicense)}
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
  ${tocContributors(name.confirmifContributors)}
  ${tocLicense(name.confirmLicense)}
  ${tocContact(name.confirmContact)}
  </ol>
  </details>
  
  ${generateAbout(about, name.inputSS)}
  
  ## Built With

  ${name.languages}
  
  <!-- GETTING STARTED -->
  ${generateGettingStarted(name.preRequisites, name.installation)}

  <!-- CONTRIBUTING -->
  ${generateContributors(contributors)}
  <!-- LICENSE -->
  ${generateLicense(name.listLicense)}
  
  <!-- CONTACT -->
  ${generateContact(name.inputContactName, name.inputContactEmail, name.inputContactGit)}
  `;
};