require('dotenv').config(); // Cargara todas las variables de entorno

const app = require('./app');
require ('./database');

//configurar servidor incial
const msg_init="***** Servidor iniciado en el puerto: "

async function main() {
    await app.listen(app.get('port'));
    console.log(msg_init+app.get('port'));
}

main();