const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initilization', () => {
        it('Should create an intern object with a name, id, email, and school if provided valid arguments', () => {
            const intern = new Intern('Josh', 12, 'Josh@email.com', 'University of Oregon');

            // Verify that all properties are accruate
            expect(intern.name).toEqual('Josh');
            expect(intern.id).toEqual(12);
            expect(intern.email).toEqual('Josh@email.com');
            expect(intern.school).toEqual('University of Oregon');
        });

        it('Should throw an error if provided no arguemnts', () => {
            // We wrap the initilization in a callback function so jest will
            const intern = () => new Intern();

            //Verifies that an error was thrown in the callback function
            expect(intern).toThrow();
        });

        it("Should throw an error if 'name' is not provided", () => {
            // Initilizies a new intern without a name
            const intern = () => new Intern(23, '@sample.com', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'id' is not provided", () => {
            // Initilizies a new intern without an id
            const intern = () => new Intern('Josh', '@sample.com', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'email' is not provided", () => {
            // Initilizies a new intern without an email
            const intern = () => new Intern('Josh', 23,'', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'school' is not provided", () => {
            // Initilizies a new intern without a school
            const intern = () => new Intern('Josh', 23, '@sample.com');
            // Stores the error to compare
            const err = new Error("Parameter 'school' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'name' is not a string", () => {
            // Initilizies a new intern without an email string
            const intern = () => new Intern(23, 23, '@sample.com', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Parameter 'name' expected to be a non-empty string.")

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            // Initilizies a new intern without a number id
            const intern = () => new Intern('Josh', '23', '@sample.com', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'id' is less than 0", () => {
            // Initilizies a new intern with an id less than 0
            const intern = () => new Intern('Josh', -1, '@sample.com', 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Paramter 'id' expected to be a non-negative number.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            // Initilizies a new intern with an email that is not a string
            const intern = () => new Intern('Josh', 23, 1, 'University of Oregon');
            // Stores the error to compare
            const err = new Error("Parameter 'email' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });

        it("Should throw an error if 'school' is not a string", () => {
            // Initilizies a new intern with an school that is not a string
            const intern = () => new Intern('Josh', 23, '@sample.com', 1);
            // Stores the error to compare
            const err = new Error("Parameter 'school' expected to be a non-empty string.");

            // Verifies that it is receiving the same error
            expect(intern).toThrowError(err);
        });
    });

    describe("getSchool", () => {
        it("Should return the school of the intern", () => {
            // Initilizies a new intern
            const intern = new Intern('Josh', 23, '@sample.com', 'University of Oregon');

            //Verifies that the method getSchool() returns the school of the intern
            expect(intern.getSchool()).toEqual('University of Oregon');
        });
    });

    describe("getRole", () => {
        it("Should return the role of the intern", () => {
            const intern = new Intern('Josh', 23, '@sample.com', 'University of Oregon');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});