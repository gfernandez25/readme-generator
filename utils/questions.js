const inquirer = require('inquirer');

const title = {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
};
const description = {
    type: 'input',
    name: 'description',
    message: 'What\'s the project about?',
};
const link = {
    type: 'input',
    name: 'link',
    message: 'What is the link for the project?',
};
// const stepsExplanation = {
//     type: 'confirm',
//     name: 'stepsExplanation',
//     message: ,
// };
const installationSteps = {
    type: 'input',
    name: 'installationSteps',
    message: 'What is the description for step ${stepNumber}?',
};
const moreStepsConfirmation = {
    type: 'confirm',
    name: 'moreStepsConfirmation',
    message: 'Do you have more installation steps?',
};
const usageInstructions = {
    type: 'input',
    name: 'usageInstructions',
    message: 'Can you provide instructions and examples for use?',
};
const license = {
    type: 'checkbox',
    name: 'license',
    message: 'What licenses are you using for your project? (Select any that apply)',
    choices: [{
        name: 'MIT',
    }, {
        name: 'GPL',
    }, {
        name: 'ISC',
    }]
};
const contributing = {
    type: 'input',
    name: 'contributing',
    message: 'Could you add guidelines on how to contribute to your project?',
};
const tests = {
    type: 'input',
    name: 'tests',
    message: 'Could you add guidelines on how to test your project?',
};
const contactGithubUsername = {
    type: 'input',
    name: 'contactGithubUsername',
    message: 'What is your Github Username?',
};
const contactGithubLink = {
    type: 'input',
    name: 'contactGithubLink',
    message: 'Can you provide the link to your GitHub profile?',
};
const contactEmailAddress = {
    type: 'input',
    name: 'contactEmailAddress',
    message: 'What is your email address associated with your GitHub profile?',
};
const generateFile = {
    type: 'list',
    name: 'generateFile',
    message: 'Would you like to generate the file?',
    choices: [{
        name: 'Yes, generate file',
        default: true,
    }, {
        name: 'No, redo the questions',
    }]
};

const generateQuestionsSet = function (questions, message = undefined) {
    if (!!message) {
        console.log(message)
    }

    return inquirer.prompt(questions);
}


module.exports = {
    questionsSet: {
        title,
        description,
        link,
        usageInstructions,
        license,
        contributing,
        tests,

        installationSteps,
        moreStepsConfirmation,

        contactGithubUsername,
        contactGithubLink,
        contactEmailAddress,

        generateFile,
    },
    generateQuestionsSet,
};
