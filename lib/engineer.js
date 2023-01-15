const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, git) {
    // !name.trim().length returns a boolean since the negation forces it into a truthy or falsey statement
    if (typeof name !== 'string' || !name.trim().length) {
      throw new Error("Parameter 'name' expected to be a non-empty string.");
    }
    // isNaN() is a function in javascript that returns if a value 'is not a number' or not
    if (typeof id !== 'number' || isNaN(id) || id < 0) {
      throw new Error("Paramter 'id' expected to be a non-negative number.");
    }

    if (typeof email !== 'string' || !name.trim().length) {
      throw new Error("Parameter 'email' expected to be a non-empty string.");
    }
    
    if (typeof git !== 'string' || !git.trim().length) {
      throw new Error("Parameter 'name' expected to be a non-empty string.");
    }

    super(name, id, email);
    this.git = git;
  }

  getGithub() {
    // Retrieves the GitHub from the Engineer
    return this.git;
  }

  // @Override
  getRole() {
    // Overrides the getRole function in the parent class
    // It is common practice to use @override for viewers to follow along
    return this.constructor.name;
  }
}

module.exports = Engineer;