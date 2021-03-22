var Messages = {
  storage: {},
  items: function() {
    return Object.values(Messages.storage);
  },
  add: function(message, cb) {
    message = Messages.conform(message);
    Messages.storage[message.objectId] = message;
    cb(Messages.items());

  },
  update: function(messages, callback) {
    for ( var message of messages) {
      Messages.add(message);
    }
    callback(Messages.items());
  },
  conform: function(message) {
    //ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }


};