const url_base = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';

const { get } = require("axios").create({
    "headers" : {
        "X-RapidAPI-Key" : '3ea27d1bb3msh4082a57cbb46db3p109af3jsn7adcb32aeb26'
    }
});


const geoPosicion = direccion => get(`${url_base}?location=${encodeURI(direccion)}`)
    .then((result) => {
        if (result.status !== 200)
            throw "Fallo conexion!";

        if(result.data.Results.length === 0)
            throw "Sin resultados";
        
        return result.data.Results[0];
    })
    .catch(err => { throw err; });

module.exports = geoPosicion;