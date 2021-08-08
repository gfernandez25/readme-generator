// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateLicenses = require('./utils/generateMarkdown');

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

    const questions = [];

    inquirer.prompt([
        {
            type: 'input',
            name: 'titleOfProject',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        }


    ]).then(readmeData => { console.log(readmeData)});


//promptUser()


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
