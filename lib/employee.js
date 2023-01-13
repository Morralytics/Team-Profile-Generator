class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // Retrieves the name of the Employee
        console.log(this.name)
    }

    getId() {
        // Retrieves the id of the Employee
    }

    getEmail() {
        // Retrieves the email of the Employee
    }

    getRole() {
        // Should return Employee
        return console.log(this.constructor.name)
    }

}

module.exports = Employee;