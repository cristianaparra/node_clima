
const { leerInput } = require('./helpers/inquirer')


const main = async()=>{
    const texto = await leerInput('hola: ');

    console.log(texto)
    console.log(texto)
}


main();