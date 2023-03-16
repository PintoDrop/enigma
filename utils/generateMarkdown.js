function renderLicenseBadge(license) {
  let badge = "";

  if (license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "BSD-3") {
    badge = `[![License BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Apache") {
    badge = `[![License Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    license = "";
  }

  return badge;
}


function renderLicenseSection(license) {
  let licenseUrl = "";

  if (license === "MIT") {
    licenseUrl = `[MIT License Website](https://mit-license.org/)`;
  } else if (license === "BSD-3") {
    licenseUrl = `[BSD-3 License Website](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Apache") {
    licenseUrl = `[Apache 2.0 License Website](https://www.apache.org/licenses/LICENSE-2.0.html)`;
  } else {
    licenseUrl = "";
  }

  return licenseUrl;
}

function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

## *Table Of Contents*

1. [Description](#description)  
2. [Installation](#installation)
3. [Usage](#usage)
4. [contributors](#contributors)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors

${data.contributors}

## Tests

${data.test}


## Questions

*If there are any questions about the project or if you'd wish to request a clone of the repo, my github can be reached here:*

[${data.github}](https://github.com/${data.github})


*You can also reach me via email here for any related questions to the application:*

${data.email}

## License

${data.license}

*Website for license* (Will be blank if there is no license or you need to refer to the repository)

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
