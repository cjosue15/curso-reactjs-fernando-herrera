import '@testing-library/jest-dom';

const { getSaludo } = require('../../base/02-template-string');

describe('Pruebas en 02-template-string.test.ls', () => {
    test('getSaludo debe de retornar Hola Carlos', () => {
        const nombre = 'Carlos';

        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test('getSaludo debe de retornar Hola Fernando si no recive argumento', () => {
        const saludo = getSaludo();

        console.log(saludo);

        expect(saludo).toBe(`Hola Fernando`);
    });
});
