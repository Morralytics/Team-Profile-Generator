
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initilization', () => {
        it('Should create an engineer object with a name, id, email, and GitHub if provided valid arguments', () => {
            const engineer = new Engineer('Josh', 12, 'Josh@email.com', 'GitHub.com');

            // Verify that all properties are accruate
            expect(engineer.name).toEqual('Josh');
            expect(engineer.id).toEqual(12);
            expect(engineer.email).toEqual('Josh@email.com');
            expect(engineer.git).toEqual('GitHub.com');
        });

        it('Should throw an error if provided no arguemnts', () => {
            // We wrap the initilization in a callback function so jest will
            const engineer = () => new Engineer();

            //Verifies that an error was thrown in the callback function
            expect(engineer).toThrow();
        });

        it("Should throw an error if 'name' is not provided", () => {
            // Initilizies a new engineer without a name
            const engineer = () => new Engineer(23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'id' is not provided", () => {
            // Initilizies a new engineer without an id
            const engineer = () => new Engineer('Josh', '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'email' is not provided", () => {
            // Initilizies a new engineer without an email
            const engineer = () => new Engineer('Josh', 23);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'name' is not a string", () => {
            // Initilizies a new engineer without an email string
            const engineer = () => new Engineer(23, 23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.")

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            // Initilizies a new engineer without a number id
            const engineer = () => new Engineer('Josh', '23', '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'id' is less than 0", () => {
            // Initilizies a new engineer with an id less than 0
            const engineer = () => new Engineer('Josh', -1, '@sample.com');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            // Initilizies a new engineer with an email that is not a string
            const engineer = () => new Engineer('Josh', 23, 1);
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(engineer).toThrowError(err);
        });
    });
});