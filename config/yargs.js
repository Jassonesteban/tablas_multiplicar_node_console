const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla a multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    describe: 'Opción que permite listar la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Opcion que permite decir hasta donde hay que multiplicar'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un número';
    }

    return true;
})
.argv;

module.exports = argv;