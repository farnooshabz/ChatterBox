var Rooms = {
  //_data = list of strings => keep adding and adding and ignore if it is already there ---> to iterate _data (for of // for in // .values )
  _data: new set,
  selected: 'lobby',
  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },
  update: function (messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));
  }
};