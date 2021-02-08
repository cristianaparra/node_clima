require("dotenv").config();

const { inquirerMenu, pausa, leerInput,listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        
        //molstrat los lugares
        const lugares = await busquedas.ciudad(termino);
        
        // seleccionar los lugares
        const id = await listarLugares(lugares);
        const lugarSeleccionado = lugares.find(l=>l,id === id)
        
        // clima

        //mostrar resultados

        console.log("\ninformacion de la ciudad\n".green);
        console.log("Ciudad: ",lugarSeleccionado.nombre);
        console.log("Lat: ", lugarSeleccionado.lat);
        console.log("Lng: ", lugarSeleccionado.lng);
        console.log("Temperatura: ");
        console.log("Minima: ");
        console.log("Maxima: ");
        break;
    }

    console.log({ opt });

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
