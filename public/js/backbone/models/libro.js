var Libro = Backbone.Model.extend({

  urlRoot:'/libros',

  validate: function(atributos){
    if (!atributos.titulo){
      console.log('debe tener titulo');
    }
  },
  initialize: function(){

    this.on('change', function(){
      console.log('el modelo ha cambiado');
    })

  },
  defaults: {
    autor: 'desconocido',
    titulo: 'desconocido',
    categoria: 'desconocido'
  }
});
