// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `
  Info on License: [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `
  <a class="license"></a>
  ## License

  The application is covered under the following license:

  ${renderLicenseLink(license)}
  `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  <a class="installation"></a>
  ## Installation

  To install necessary dependencies, run the following command:
    
    ${data.install}

  <a class="usage"></a>
  ## Usage

  ${data.repoInstructions}

${renderLicenseSection(data.license)}


  <a class="contributing"></a>
  ## Contributing

  ${data.repoContribution}

  <a class="tests"></a>
  ## Test

  To run tests, run the following command:
    
    ${data.test}

  <a class="questions"></a>
  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at [${
    data.email
  }](mailto:${data.email}) Source Han Sans). You can find more of my work at [${
    data.githubUserclass
  }](https://github.com/${data.githubUserclass}).
`;
}

module.exports = generateMarkdown;
