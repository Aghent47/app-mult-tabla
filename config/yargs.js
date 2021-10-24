const argv = require('yargs')
  .option(
    'b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla a multiplicar'
  })
  .option(
    'h', {
      alias: 'limite',
      type: 'number',
      describe: 'limite de la tabla a crear'
    }
  )
  .option(
    'l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla que se creó'

  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tienes que ser de tipo numerico';
    }

    return true;
  }).argv;

  module.exports = argv;