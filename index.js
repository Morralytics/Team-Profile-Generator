const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// const newEmployee = new Employee('nick', 23, '@gmail');
// const newEngineer = new Engineer('nick morris', 24, '@gmail', 'volexity22')
// const newManager = new Manager('nick morris', 24, '@gmail', 'volexity22')
// const newIntern = new Intern('nick morris', 24, '@gmail', 'volexity22')

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?', 
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your team Id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What is your role with the team?',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])
}