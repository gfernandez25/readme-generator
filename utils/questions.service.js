const inquirer = require('inquirer');

const title = {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter the name of your project!');
            return false;
        }
    }
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

const installationSteps = function (stepNumber) {
    return {
        type: 'input',
        name: 'installationSteps',
        message: `What is the description for step ${stepNumber}?`,
    }
};

const moreStepsConfirmation = {
    type: 'confirm',
    name: 'moreStepsConfirmation',
    message: 'Do you have more installation steps?',
};

const usageInstructions = {
    type: 'input',
    name: 'usageInstructions',
    message: 'Could you provide instructions or examples on how to use?',
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

const generateQuestionsSet = function (questions, message = undefined) {
    if (!!message) {
        console.log(message)
    }

    return inquirer.prompt(questions);
}

const generateInstructionSteps = async function () {
    console.log('Please provide step by step instructions on how to install your project')
    const answers = [];
    let qSet;
    let n = true;
    let stepNumber = 1;

    while (n != false) {
        qSet = await generateQuestionsSet([
            installationSteps(stepNumber),
            moreStepsConfirmation
        ])
        n = qSet.moreStepsConfirmation;

        answers.push(qSet);
        stepNumber++;
    }

    return answers;
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

        contactGithubUsername,
        contactGithubLink,
        contactEmailAddress,
    },
    generateQuestionsSet,
    generateInstructionSteps
};
