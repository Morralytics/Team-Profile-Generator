const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initilization', () => {
        it('Should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('Josh', 12, 'Josh@email.com');

            // Verify that all properties are accruate
            expect(employee.name).toEqual('Josh');
            expect(employee.id).toEqual(12);
            expect(employee.email).toEqual('Josh@email.com');
        });

        it('Should throw an error if provided no arguemnts', () => {
            // We wrap the initilization in a callback function so jest will
            const employee = () => new Employee();

            //Verifies that an error was thrown in the callback function
            expect(employee).toThrow();
        });

        it("Should throw an error if 'name' is not provided", () => {
            // Initilizies a new employee without a name
            const employee = () => new Employee(23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'id' is not provided", () => {
            // Initilizies a new employee without an id
            const employee = () => new Employee('Josh', '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'email' is not provided", () => {
            // Initilizies a new employee without an email
            const employee = () => new Employee('Josh', 23);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'name' is not a string", () => {
            // Initilizies a new employee without an email string
            const employee = () => new Employee(23, 23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.")

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            // Initilizies a new employee without a number id
            const employee = () => new Employee('Josh', '23', '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'id' is less than 0", () => {
            // Initilizies a new employee with an id less than 0
            const employee = () => new Employee('Josh', -1, '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            // Initilizies a new employee with an email that is not a string
            const employee = () => new Employee('Josh', 23, 1);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(employee).toThrowError(err);
        });
    });

    describe("getName", () => {
        it("Should return the name of the employee", () => {
            // Initilizies a new employee
            const employee = new Employee('Josh', 23, '@sample.com');

            //Verifies that the method getName() returns the name of the employee
            expect(employee.getName()).toEqual('Josh');
        });
    });

    describe("getId", () => {
        it("Should return the id of the employee", () => {
            // Initilizies a new employee
            const employee = new Employee('Josh', 23, '@sample.com');

            //Verifies that the method getId() returns the id of the employee
            expect(employee.getId()).toEqual(23);
        });
    });

    describe("getEmail", () => {
        it("Should return the email of the employee", () => {
            // Initilizies a new employee
            const employee = new Employee('Josh', 23, '@sample.com');

            //Verifies that the method getEmail() returns the email of the employee
            expect(employee.getEmail()).toEqual('@sample.com');
        });
    });
});