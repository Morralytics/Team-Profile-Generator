const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initilization', () => {
        it('Should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('Josh', 12, 'Josh@email.com');

            // Verify that all properties are accruate
            expect(employee.name).toEqual('Josh');
            expect(employee.id).toEqual(12);
            expect(employee.email).toEqual('Josh@email.com');
        })

        it('Should throw an error if provided no arguemnts', () => {
            // We wrap the initilization in a callback function so jest will
            const employee = () => new Employee();

            //Verifies that an error was thrown in the callback function
            expect(employee).toThrow();
        })
    })
})