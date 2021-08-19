// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `## License
    This project is licensed with ${license}.`;
  }
  if (license) return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `## License
    This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Installation Instructions
  ${data.Installation}

  ## Table of Contents
  -[Description](#description)

  -[Installation](#Installation)

  -[Usage](#Usage)

  -[Contribution](#contribution)

  -[Tests](#test)

  -[Badge](#license)

  -[Questions](#questions)
  


  ## Usage 
  

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Badge
  ${data.license}

  ## Questions
  ${data.Github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
