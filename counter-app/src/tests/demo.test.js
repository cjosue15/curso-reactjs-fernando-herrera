// Usamos Jest para las pruebas

describe('Pruebas en al archivo demo.test.js', () => {
    test('deben ser iguales', () => {
        // 1. Inicializacion

        const mensaje = 'Hola Mundo';

        // 2. Estimulo

        const mensaje2 = `Hola Mundo`;

        //3. Observar

        expect(mensaje).toBe(mensaje2);
    });
});
