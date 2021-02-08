require("dotenv").config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
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
        const lugarSeleccionado = lugares.find((l) => l, id === id);

        // clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng
        );
        //mostrar resultados
        console.clear();
        console.log("\ninformacion de la ciudad\n".green);
        console.log("Ciudad: ", lugarSeleccionado.nombre.green);
        console.log("Lat: ", lugarSeleccionado.lat);
        console.log("Lng: ", lugarSeleccionado.lng);
        console.log("Temperatura: ", clima.temp);
        console.log("Minima: ", clima.min);
        console.log("Maxima: ", clima.max);
        console.log("Cómo está el clima: ", clima.desc.green);

        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
