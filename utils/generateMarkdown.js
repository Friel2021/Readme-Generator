function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "Apache 2.0") {
    return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == "Mozilla 2.0") {
    return `
  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

function renderLicenseSection(license) {
  if (license == "MIT") {
    return `## License Resources
  https://opensource.org/licenses/MIT`;
  }
  if (license == "Apache 2.0") {
    return `## License Resources
  https://opensource.org/licenses/Apache-2.0`;
  }
  if (license == "Mozilla 2.0") {
    return `## License Resources
  https://opensource.org/licenses/MPL-2.0`;
  }
  if (license !== "none") return "";
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description 
  ${data.description}
 

  ## Installation Instructions
  ${data.Installation}

  ## Usage
 

  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Contribution](#contribution)

  -[Tests](#test)

  -[License Resources](#license)

  -[Questions](#questions)
  

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  
  ${renderLicenseSection(data.license)}


  ## Questions
  github.com/${data.Github}

  ${data.email}

  
`;
}

module.exports = generateMarkdown;
