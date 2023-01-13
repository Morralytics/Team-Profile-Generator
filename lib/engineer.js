const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, git) {
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
    return console.log(this.constructor.name); 
  }
}

module.exports = Engineer;