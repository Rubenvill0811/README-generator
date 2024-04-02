const fs = require("fs");
const inquirer = require("inquirer");
const docCompiler = require('./response-compiler');

const getAuthoName = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "author",
            message: "What is the name of the author?"
        }
        ])
        .then((answer) => {
            fs.writeFile('README.md', docCompiler(answer), (err) => {
                err ? console.error(err) : console.log('Author name added');
            })
        })
}

getAuthoName();

    
