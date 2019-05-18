let yargs = require("yargs").options({
    "direccion" : {
        "alias" : 'd',
        "desc" : 'Direccion de clima a buscar',
        "demand" : true
    }
});

module.exports = yargs.argv;