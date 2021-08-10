// TODO: Include packages needed for this application

const questionsService = require('./utils/questions.service');
const markdownService = require('./utils/generateMarkdown.service');
const fileService = require('./utils/file.service')

// TODO: Create an array of questions for user input
/*  -title of my project
    -Description,
    -Table of Contents,
    -Installation,
    -Usage,
    -License,
    -Contributing,
    -Tests, and
    -Questions
     -github username - this is added to the section of the README entitled Questions, with a link to my GitHub profile
     -email address -this is added to the section of the README entitled Questions, with instructions on how to reach me with additional question
    */

init();

// TODO: Create a function to initialize app
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
        projectQuestions: await generateQuestionsSet([
            title,
            description,
            link,
            usageInstructions,
            license,
            contributing,
            tests,
        ]),
        installationQuestions: await generateInstructionSteps(),
        contactQuestions: await generateQuestionsSet([
            contactGithubUsername,
            contactGithubLink,
            contactEmailAddress,
        ], '\n In order for users to contact you with questions about your application we are going to need some information'),
    }

    const fileData = generateMarkdown(answers);
    fileService.write(fileData);
}







// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}


