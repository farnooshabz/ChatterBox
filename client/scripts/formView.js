var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var msg = {
      roomname: Rooms.selected,
      username: App.username,
      text: FormView.$form.find('#message').val()
    };
    Parse.create(msg, (data) => {
      //what extend does is to merge the remaining properties that we need with the ones that we created
      //parse does not return entire object just the properties it created 
      _.extend(msg, data);
      Messages.add(msg, MessagesView.render);

    });

    console.log('clicked');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};