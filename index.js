const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')

const newEmployee = new Employee('nick', 23, '@gmail');
const newEngineer = new Engineer('nick morris', 24, '@gmail', 'volexity22')
const newManager = new Manager('nick morris', 24, '@gmail', 'volexity22')

newEmployee.getRole();
newEngineer.getRole();
newManager.getRole();