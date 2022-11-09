const Users = require('../model/user.model')

// Todos las requires necesarios, como el modelo de cita
module.exports = {
    create: function(req, res) {
    	Users.Post.create({ title: 'Post Title', content: 'Mi Contenido' }, function (err, data) {
            if (err) {
                console.log('ocurrio un error:' + err);
            } else {
                res.render("index", { errores: [] });
            }
        });
    },
    searchAll: function(req, res) {
    	Users.Post.find()
        .then(data => res.render("resultado", { detalles: data }))
        .catch(err => {
            console.log('ocurrio un error:' + err);
        });
    }
};


    
    
   