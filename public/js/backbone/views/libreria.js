var Libreria = Backbone.View.extend({

// llamar a elemento directo del dom
el: '.vista',

/* ----- Crear elemento
  tagName: 'div',
  className: 'vista',
  id:'nombreId'
  */

  initialize: function() {
    //lo corro automatico para no llamar a .render();
    this.render();
  },

  render: function(){
    this.$el.html('<p class="cambiarColor">dsadsagijpqrij 3eijofdaimo </p>');
  },

  events:{
    'click .cambiarColor': 'cambioColor'
  },

  cambioColor: function() {
    this.$el.css('color','red');
  }

});
