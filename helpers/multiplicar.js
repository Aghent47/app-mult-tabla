const fs = require("fs");
const colors = require('colors/safe');
require('colors');

const crearArchivo = async (base = 5, listar, limite = 10) => {
  try {
    let salida = "";
    let consola = '';
    
    for (let i = 1; i <= limite; i++) {

      salida += `${base} x ${i} =  ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.red}  ${colors.green(base * i)}\n`;

    }

    if(listar){
      console.log("====================");
      console.log(colors.green("   Tabla del: ", base));
      console.log("====================");

      console.log(consola);
    }
      
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
