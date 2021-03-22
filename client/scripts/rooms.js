var Rooms = {
  storage: new Set(),
  selected: 'lobby',

  //list of rooms for roomsview
  items: () => {
    return [...Rooms.storage];
  },
  isSelected: function(roomname = 'lobby') {
    return roomname === Rooms.selected;
  },
  add: function (roomname, callback = () => {}) {
    Rooms.storage.add(roomname);
    Rooms.selected = roomname;
    callback(Rooms.items);
  },
  update: function(messages, callback = () => {}) {
    messages.forEach(message => {
      Rooms.add(message.roomname);
    });
    callback(Rooms.items());
  }
};