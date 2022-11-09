

module.exports = function (app) {

    const express = require('express');

    //para porde referenciar los contenidos estaticos como imagenes, js, styles
    app.use(express.static(__dirname + '/../../client/static'));

    //carpete de todos los htmls que son interpretados como ejs
    app.set('views', __dirname + '/../../client/views');

    //motor interprete de las vistas
    app.set('view engine', 'ejs');

    //para recuperar campos de formularios
    let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extends: true }));
    
    const usersController = require('../controller/users.contrroller')
    
    app.get('/', function (req, res) {
        usersController.create(req,res);
    });
    app.post('/qryAll', function (req, res) {
        usersController.searchAll(req,res);
    });


}


