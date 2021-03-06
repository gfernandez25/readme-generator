
const questionsService = require('./utils/questions.service');
const markdownService = require('./utils/generateMarkdown.service');
const fileService = require('./utils/file.service')


init();

async function init() {
    const {generateMarkdown} = markdownService;
    const {questionsSet, generateQuestionsSet, generateInstructionSteps} = questionsService;
    const {
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
    } = questionsSet;

    const answers = {
        projectQuestionsSetOne: await generateQuestionsSet([
            title,
            description,
            link,
        ]),
        installationQuestions: await generateInstructionSteps(),
        projectQuestionsSetTwo: await generateQuestionsSet([
            usageInstructions,
            license,
            contributing,
            tests,
        ]),
        contactQuestions: await generateQuestionsSet([
            contactGithubUsername,
            contactGithubLink,
            contactEmailAddress,
        ], '\n In order for users to contact you with questions about your application we are going to need some information'),
    }

    const fileData = generateMarkdown(answers);
    fileService.write(fileData);
}


function writeToFile(fileName, data) {
}


