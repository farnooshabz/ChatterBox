var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //stop the browser to to it's default
    event.preventDefault();

    var message = {
      username: App.username,
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('#message').val()
    };

    Parse.create(message, (data) => {
      //what extend does is to merge the remaining properties that we need with the ones that we created
      //parse does not return entire object just the properties it created
      _.extend(message, data);
      Messages.add(message, MessagesView.render);

    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};