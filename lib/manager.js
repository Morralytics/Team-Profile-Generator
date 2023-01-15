const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

  getOfficeNum() {
    return this.officeNum;
  }
  // @Override
  getRole() {
    // Overrides the getRole function in the parent class
    // It is common practice to use @override for viewers to follow along
    return this.constructor.name; 
  }
}

module.exports = Manager;