const Employee = require('../lib/employee');
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
    });
});