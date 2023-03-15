// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  // let baseBadge = "";
  // if(license = "none") {
  //   badge = "!"
  // }

// var = 'badge' (not for code, just a note)

  // return 'badge';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

## Table Of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [contributors](#contributors)
5. [Test](#test)
6. [License](#license)
7. [Git-Hub] (#github)
8. [Email] (#email)

## Description

${data.description}

##  Installation

${data.installation}

## Usage

${data.usage}

## Contributors

${data.contributors}

## Test

${data.test}

## License

${data.license}

## Github

${data.github}

## Email

${data.email}





${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
