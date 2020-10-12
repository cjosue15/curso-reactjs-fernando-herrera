const { retornaArreglo } = require('../../base/07-deses-arr');

describe('Prruebas en desestructuracion', () => {
    test('Debereia retornar un string y  un numeri', () => {
        const arr = retornaArreglo();
        console.log(arr);

        expect(arr).toEqual(['ABC', 123]);
    });
});
