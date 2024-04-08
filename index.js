const fs = require("fs");
const inquirer = require("inquirer");
const docCompiler = require('./response-compiler');

const getData = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your app?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your application"
        },
        {
            type: "input",
            name: "license",
            message: "Type the name of the license you used on your repo."
        },
        {
            type: "input",
            name: "installation",
            message: "Describe to the user how they can install your application."
        },
        {
            type: "input",
            name: "dependencies",
            message: "In an organized fashion, list the dependencies required to run your application"
        },
        {
            type: "input",
            name: "usage",
            message: "In detail, describe the usage of your application"
        },
        {
            type: "input",
            name: "contribution",
            message: "Has any one else contributed to your application? if not answer 'N/A'."
        },
        {
            type: "input",
            name: "tests",
            message: "Have you ran any tests on your application? If so describe the tests you ran and its result, if not answer 'N/A'."
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "emailUser",
            message: "What is the first part of your email before the '@'? example: someone123. type your email but DO NOT add the '@'!"
        },
        {
            type: "input",
            name: "emailPro",
            message: "Who is the provider of your email service? example: 'gmail.com' or 'yahoo.com'."
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn username?"
        },
        ])
        .then((answer) => {
            fs.writeFile('README.md', docCompiler(answer), (err) => {
                err ? console.error(err) : console.log('README.md created sucessfully!');
            })
        })
}

getData();

