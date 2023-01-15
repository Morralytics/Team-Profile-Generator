const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

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

        if(answers.role === 'Engineer') {
            const engineerAnswer = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your GitHub profile?',
                        name: 'git'
                    }
                ])
                const newEngineer = new Engineer(
                    answers.name,
                    parseInt(answers.id),
                    answers.email,
                    engineerAnswer.git
                    )
                    console.log(newEngineer);
        }
        else if(answers.role === 'Intern') {
            const internAnswer = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What school have you or are currently attending?',
                        name: 'school'
                    }
                ])
                const newIntern = new Intern(
                    answers.name,
                    parseInt(answers.id),
                    answers.email,
                    internAnswer.school
                )
                console.log(newIntern);
        };
};

questions();