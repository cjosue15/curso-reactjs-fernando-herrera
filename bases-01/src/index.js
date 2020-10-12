console.log('Hola mundo');

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'irnonma',
};

const { nombre } = persona;
console.log(nombre);

const retornaPersona = ({ nombre, edad }) => {
    console.log(nombre, edad);
};

retornaPersona(persona);
