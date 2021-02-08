require('dotenv').config()


const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu();
    switch(opt){
        case 1:
            //mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
           await busquedas.ciudad(lugar)

            //molstrat los lugares

            // seleccionar los lugares
            

            // clima
             
            //mostrar resultados

            console.log('\ninformacion de la ciudad\n'.green);
            console.log('Ciudad: ',);
            console.log('Lat: ',);
            console.log('Lng: ',);
            console.log('Temperatura: ',);
            console.log('Minima: ',);
            console.log('Maxima: ',);
        break;
    }

    console.log({ opt });

    if (opt !== 0) await pausa();
  } while (opt !== 0);

};

main();
