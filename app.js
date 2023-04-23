const {crearArchivoTabla, crearArchivoPromesa} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();
//const base2 = 2;
 
crearArchivoTabla(argv.b, argv.l, argv.h).then( msg => console.log(msg, 'creado')).catch(err => console.log(err));
//crearArchivoPromesa(base2).then(msg => console.log(msg, ' creado')).catch(err => console.log(err));

//console.log(process.argv);

