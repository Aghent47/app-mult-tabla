const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/* const [,,arg3 = 'base=2'] = process.argv;
const [,base] = arg3.split('=');
 */

//console.log(process.argv);
//console.log(argv);
//console.log('base: Yargs',argv.base);

crearArchivo(argv.base, argv.listar,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
