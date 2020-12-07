var Messages = {
  _data: {},
  items: function() {
    return Messages._data._chain();
  },
  add: function(message, cb) {
    Messages._data[message.objectId] = Messages.conform(message);
    cb();

  },
  update: function(messages, callback) {
    for ( var message of messages) {
      Messages._data[message.objectId] = Messages.conform(message);
    }
    callback();
  },
  _conform: function(message) {
    //ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }


};