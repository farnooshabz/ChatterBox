var MessagesView = {
  $chats: $('#chats'),
  initialize: function() {

    //anything that should be done here when dom loads
    //username needed to specify only the clicks on divs with username class
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },



  render: function(messages) {
    //render all the msges
    //to avoid duplicate messages let's clear the dom first
    MessagesView.$chats.html('');
    messages.forEach(message => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    //render a single msg
    //generate a new message dom element
    //save that dom element to a var
    var $message = MessageView.render(message);
    //append it to dom
    MessagesView.$chats.prepend($message);
  },
  handleClick: function (event) {
    //handle users clicking on a message
    //toggling between friend
    //extract the username:
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    } else {
      Friends.toggleStatus(username, MessagesView.render);
    }
  }

};
