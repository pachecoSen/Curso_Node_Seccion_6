const { direccion } = require("./config/yargs");

const posiccion = require("./src/geoPosicion"),
    clima = require("./src/geoClima");

posiccion(direccion)
    .then(result => {
        const { lat, lon } = result;

        return { lat, lon };
    })
    .then(clima)
    .then(data => {
        data['direccion'] = direccion;

        return data;
    })
    .then(console.log)
    .catch(console.log);