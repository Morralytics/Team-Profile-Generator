const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initilization', () => {
        it('Should create an manager object with a name, id, email, and office number if provided valid arguments', () => {
            const manager = new Manager('Josh', 12, 'Josh@email.com', 3);

            // Verify that all properties are accruate
            expect(manager.name).toEqual('Josh');
            expect(manager.id).toEqual(12);
            expect(manager.email).toEqual('Josh@email.com');
            expect(manager.officeNum).toEqual(3);
        });

        it('Should throw an error if provided no arguemnts', () => {
            // We wrap the initilization in a callback function so jest will
            const manager = () => new Manager();

            //Verifies that an error was thrown in the callback function
            expect(manager).toThrow();
        });

        it("Should throw an error if 'name' is not provided", () => {
            // Initilizies a new manager without a name
            const manager = () => new Manager(23, '@sample.com', 3);
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'id' is not provided", () => {
            // Initilizies a new manager without an id
            const manager = () => new Manager('Josh', '@sample.com', 3);
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'email' is not provided", () => {
            // Initilizies a new manager without an email
            const manager = () => new Manager('Josh', 23,'', 3);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'officeNum' is not provided", () => {
            // Initilizies a new manager without an office number
            const manager = () => new Manager('Josh', 23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'officeNum' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'name' is not a string", () => {
            // Initilizies a new manager without an email string
            const manager = () => new Manager(23, 23, '@sample.com', 3);
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.")

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            // Initilizies a new manager without a number id
            const manager = () => new Manager('Josh', '23', '@sample.com', 3);
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'id' is less than 0", () => {
            // Initilizies a new manager with an id less than 0
            const manager = () => new Manager('Josh', -1, '@sample.com', 3);
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            // Initilizies a new manager with an email that is not a string
            const manager = () => new Manager('Josh', 23, 1, 3);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'officeNum' is not a number", () => {
            // Initilizies a new manager without a number as an office number
            const manager = () => new Manager('Josh', 23, '@sample.com', 'office number 3');
            // Stores the error to compare
            const err = new Error("Paramter 'officeNum' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });

        it("Should throw an error if 'officeNum' is less than 0", () => {
            // Initilizies a new manager with an office number less than 0
            const manager = () => new Manager('Josh', 1, '@sample.com', -1);
            // Stores the error to compare
            const err = new Error("Paramter 'officeNum' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(manager).toThrowError(err);
        });
    });

    describe("getOfficeNum", () => {
        it("Should return the office number of the manager", () => {
            // Initilizies a new manager
            const manager = new Manager('Josh', 23, '@sample.com', 3);

            //Verifies that the method getOfficeNum() returns the office number of the manager
            expect(manager.getOfficeNum()).toEqual(3);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the manager", () => {
            const manager = new Manager('Josh', 23, '@sample.com', 3);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});