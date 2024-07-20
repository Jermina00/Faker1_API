
const express = require('express');
const faker = require('faker');

const app = express();
const PORT = 8000;

// Definición de clases
class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroTelefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.companyName();
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        };
    }
}
//Muestra en consola
console.log(new Usuario());
console.log(new Empresa());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

// Rutas API
app.get('/api/users/new', (req, res) => {
    const nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
});

app.get('/api/companies/new', (req, res) => {
    const nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

app.get('/api/user/company', (req, res) => {
    const nuevoUsuario = new Usuario();
    const nuevaEmpresa = new Empresa();
    res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});