// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { badge, ValidationError } = require("badge-maker");

function renderLicenseBadge(license) {

  if(license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue.svg";
  } else if (license === "Apache") {
    return "https://img.shields.io/badge/license-Apache%202.0-green.svg";
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/license-MPL%202.0-orange.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === 'MIT'){
      return ("https://choosealicense.com/licenses/mit/");
  } else if (license === 'Apache'){
      return ("https://choosealicense.com/licenses/apache-2.0/");
  } else if (license === 'Mozilla') {
      return ("https://choosealicense.com/licenses/mpl-2.0/");
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge (license);
  const link = renderLicenseLink (license);

  if (badge && link) {
    return `[![License](${badge})](${link})`;
  } else {
    return "";
  }
}

  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
    
  - [Installation](#Installation) 
  - [Usage](#Usage) 
  - [Credits](#Credits) 
  - [License](#License) 
  - [Tests](#Tests) 
  - [Questions](#Questions)
    
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any further questions:

  My Github is (https://github.com/${data.github}) 
  My email is ${data.email}

  Thank you
`;
}

module.exports = generateMarkdown;
