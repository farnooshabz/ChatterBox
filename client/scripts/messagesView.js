var MessagesView = {
  $chats: $('#chats'),
  initialize: function() {
  },



  render: function() {
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each((message) => {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      });
  }

};
