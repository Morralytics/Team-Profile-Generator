const inquirer = require('inquirer');
const fs = require('fs');
const html = require('./src/template');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// const newManager = new Manager('nick morris', 24, '@gmail', 'volexity22')
// const newIntern = new Intern('nick morris', 24, '@gmail', 'volexity22')

const finishedTeam = [];

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

    if (answers.role === 'Engineer') {
        const engineerAnswer = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your GitHub profile?',
                    name: 'git'
                },
                {
                    type: 'list',
                    message: 'What would you like to do next?',
                    name: 'nextStep',
                    choices: ['Add a new team member', 'Create team!']
                }
            ])
        const newEngineer = new Engineer(
            answers.name,
            parseInt(answers.id),
            answers.email,
            engineerAnswer.git
        )
        finishedTeam.push(newEngineer);
        if (engineerAnswer.nextStep === 'Add a new team member') {
            questions()
        } else {
            createTeam();
        }
    }
    else if (answers.role === 'Intern') {
        const internAnswer = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What school have you or are currently attending?',
                    name: 'school'
                },
                {
                    type: 'list',
                    message: 'What would you like to do next?',
                    name: 'nextStep',
                    choices: ['Add a new team member', 'Create team!']
                }
            ])
        const newIntern = new Intern(
            answers.name,
            parseInt(answers.id),
            answers.email,
            internAnswer.school
        )
        finishedTeam.push(newIntern);
        if (internAnswer.nextStep === 'Add a new team member') {
            questions()
        } else {
            createTeam();
        }
    }
    else if (answers.role === 'Manager') {
        const managerAnswer = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'officeNum'
                },
                {
                    type: 'list',
                    message: 'What would you like to do next?',
                    name: 'nextStep',
                    choices: ['Add a new team member', 'Create team!']
                }
            ])
        const newManager = new Manager(
            answers.name,
            parseInt(answers.id),
            answers.email,
            managerAnswer.officeNum
        )
        finishedTeam.push(newManager);
        if (managerAnswer.nextStep === 'Add a new team member') {
            questions()
        } else {
            createTeam();
        }
    };
};

const createTeam = () => {
    // finishedTeam.forEach(member => {
    //     console.log(member);
    // });
    fs.writeFile('./dist/index.html', html.generateHTML(), (err) =>
    err ? console.log(err) : console.log('success'));
}

questions();