const fs = require('fs');
var colors = require('colors');

const crearArchivoTabla = async (base = 1, listar, hasta) => {
    let salida = '';
    try {
        for (let i = 1; i <= hasta; i++) {
            salida +=  colors.yellow(`${base}`) + `x` + colors.white(`${i}`) +`=` + colors.cyan(`${base * i}`) +`\n`;
        }
        fs.writeFileSync(`tabla ${base}.txt`, salida);
        if(listar){
            console.log('================================='.rainbow);
            console.log('       TABLA DEL ' +  base);
            console.log('================================='.rainbow);
            console.log(salida);
        }
        return `Tabla del ${base} `;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

/************************* POR PROMESA *************************/

const crearArchivoPromesa = (base = 1) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFileSync(`tabla ${base}.txt`, salida);
        resolve(`Tabla del ${base}.txt`);
    })

}

module.exports = {
    crearArchivoTabla,
    crearArchivoPromesa
}