const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

mongoose.set('strictQuery', false);

//Conexão WebServer  
app.set('port', process.env.PORT || 7777); 
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: "+server.address().port);
})