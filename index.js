// Node imports
const inquirer = require('inquirer');
const fs = require('fs');

// Class and file imports
const html = require('./src/template');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// Stored values for generation
const finishedTeam = [];
let generatedTeamCards = '';

// Async takes the return value and automatically resolves it as a promise 
// Simplifies the code base
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
        console.log(internAnswer.school);
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

// Function that loops through each team member and generates a team card that is then converted into a single html landing page
const createTeam = () => {
    finishedTeam.forEach(member => {
        generatedTeamCards = generatedTeamCards + html.generateCard(member);
    });

    let finalTeamProfileHTML = html.generateHTML(generatedTeamCards);
    console.log(finishedTeam)
    fs.writeFile('./dist/index.html', finalTeamProfileHTML, (err) =>
    err ? console.log('err') : console.log('success'));
}

// Runs the code base
questions();