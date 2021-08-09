function renderTitle(title) {
    return `
# ${title}`
}

function renderDescription(description, link) {
    return `
    
## Description
${description}  
[project link](${link})`
}

function renderTOC() {
    return `

## Table Of Contents
* [Installation](#user-content-installation)
* [Usage](#user-content-usage)
* [Licenses](#user-content-licenses)
* [Tests](#user-content-tests)
* [Questions](#user-content-questions)`
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
generateMarkdown = function (data) {
    const {projectQuestions, installationQuestions, contactQuestions} = data;
    const {title, description, link} = projectQuestions;
    const {installationSteps, moreStepsConfirmation} = installationQuestions;

    return "" +
        renderTitle(title) +
        renderDescription(description, link) +
        renderTOC() +
        '\n\n'
    // renderLicenseBadge(license)
}

module.exports = {
    // renderTitle,
    generateMarkdown
};
