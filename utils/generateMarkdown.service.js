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

function renderInstallationSteps(steps) {

    let installationString = `
    
## Installation`;

    for (let i = 0; i < steps.length; i++) {
        installationString += `
${i+1}. ${steps[i]}`
    }

    return installationString + '\n';
}

function renderUsage(usageInstructions) {
    return `
## Usage
${usageInstructions}
`
}

function renderLicense(licenses) {
    let licenseString = `
## License`;

    if (!!licenses.length) {
        for (let i = 0; i < licenses.length; i++) {

            switch (licenses[i]) {
                case 'MIT':
                    licenseString += `
* [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
                    break;
                case 'GPL':
                    licenseString += `
* [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
                    break;
                case 'ISC':
                    licenseString += `
* [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
                    break;
            }
        }
    } else {
        licenseString += `
unlicensed`;
    }

    return licenseString;
}

function renderContributing(contributing) {
    return `
    
## Contributing
${contributing}
`
}

function renderTest(test) {
    return ` 
## Tests
${test}
`
}

function renderQuestions(username, link, email) {
    return `
## Questions
for any questions please send me and email to <${email}> or check out my GitHub profile: [${username}](${link})  

`
}

generateMarkdown = function (answers) {
    const {projectQuestions, installationQuestions, contactQuestions} = answers;
    const {title, description, link, usageInstructions, license, contributing, tests } = projectQuestions;
    const {contactGithubUsername, contactGithubLink, contactEmailAddress} = contactQuestions;

    return "" +
        renderTitle(title) +
        renderDescription(description, link) +
        renderTOC() +
        renderInstallationSteps([
            'step 1',
            'step 2',
            'step 3',
        ]) +
        renderUsage(usageInstructions) +
        renderLicense(license) +
        renderContributing(contributing) +
        renderTest(tests) +
        renderQuestions(contactGithubUsername, contactGithubLink, contactEmailAddress)  +
        '\n\n'
}

module.exports = {
    generateMarkdown
};
