import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {
    test('Debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    //get usuario activo, debe retornar un objeto

    test('Debe retornar un objeto activo', () => {
        const username = 'Carlos';

        const userTest = {
            uid: 'ABC567',
            username,
        };

        const user = getUsuarioActivo(username);

        expect(user).toEqual(userTest);
    });
});
