// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }else if(license === 'GPL 3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }else if(license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'None'){
    return ''
  } else if (license === 'Apache 2.0'){
    return `[View Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL 3.0'){
    return `[View GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
  } else if(license === 'BSD 3'){
    return `[View BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license)
  const licenseSection = `This application uses a license from ${license} 
  \n * Link: ${link}`
  if (license === 'None'){
    return ''
  } else {
    return licenseSection
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#-installation)
  * [Usage](#-usage)
  * [Contributing](#-contributing)
  * [Tests](#-tests)
  * [License](#-license)
  * [Video](#-video)
  * [Questions](#-questions)
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.dependencies}
  ## Usage
  ${data.repo}
  ## Contributing 
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  ${data.test}
  ## License 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## video
  https://drive.google.com/file/d/1Ig5PpCueJR6ZZexxlUiagD8TpL5GhJAD/view
  ## Questions 
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [https://github.com/${data.username}/](https://github.com/${data.username}/).
  
`;
}

//Turn this into an object it should work
module.exports = {generateMarkdown};