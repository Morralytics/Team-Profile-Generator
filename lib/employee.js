class Employee {
    constructor(name, id, email) {
        // !name.trim().length returns a boolean since the negation forces it into a truthy or falsey statement
        if(typeof name !== 'string' || !name.trim().length) {
            throw new Error("Parameter 'name' expected to be a non-empty string.");
        }
        // isNaN() is a function in javascript that returns if a value 'is not a number' or not
        if(typeof id !== 'number' || isNaN(id) || id < 0) {
            throw new Error("Paramter 'id' expected to be a non-negative number.");
        }

        if(typeof email !== 'string' || !name.trim().length) {
            throw new Error("Parameter 'email' expected to be a non-empty string.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // Retrieves the name of the Employee
        return this.name;
    }

    getId() {
        // Retrieves the id of the Employee
        return this.id;
    }

    getEmail() {
        // Retrieves the email of the Employee
        console.log(this.email);
    }

    getRole() {
        // Should return Employee
        return console.log(this.constructor.name);
    }

}

module.exports = Employee;