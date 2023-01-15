const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

  getSchool() {
    // Retrieves the school attending/attended from the intern
    return this.school;
  }  

  // @Override
  getRole() {
    // Overrides the getRole function in the parent class
    // It is common practice to use @override for viewers to follow along
    return this.constructor.name; 
  }
}

module.exports = Intern;