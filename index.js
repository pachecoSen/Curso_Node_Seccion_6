const { direccion } = require("./config/yargs");

const posiccion = require("./src/geoPosicion");

posiccion(direccion)
    .then(result => {
        const { name:direccion, lat, lon:lng } = result;

        return { direccion, lat, lng };
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));