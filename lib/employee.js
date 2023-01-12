class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
            // Retrieves the name of the Employee
            console.log(this.name)
        }

        this.getId = () => {
            // Retrieves the id of the Employee
        }

        this.getEmail = () => {
            // Retrieves the email of the Employee
        }

        this.getRole = () => {
            // Should return Employee
        }
    }
}

module.exports = Employee;