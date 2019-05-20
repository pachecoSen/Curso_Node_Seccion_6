const url_base = 'http://api.openweathermap.org/data/2.5/weather';

const api_key = require('./../config/api-key').openweathermap;

const { get } = require('axios');

const geoClima = cordenada => get(`${ url_base }?lat=${ cordenada.lat }&lon=${ cordenada.lon }&units=metric&appid=${ api_key }`)
    .then(result => {
        if (result.status !== 200)
            throw "Fallo conexion!";

        if(result.data.length === 0)
            throw "Sin resultados";
        
        return result.data;
    })
    .then(data => {
        const { coord:cordenadas,  main:info } = data;

        return { cordenadas, info };
    })
    .catch(err => { throw err; });

module.exports = geoClima;