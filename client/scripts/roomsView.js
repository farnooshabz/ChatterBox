var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },
  render: function() {
    //get rid of all options render out all options and then selecting the selected one.
    RoomsView.$select.html('');
    Rooms.items().forEach(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },
  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },
  handleChange: function() {
    //get the value that was selected
    Rooms.selected = RoomsView.$select.val();
    RoomsView.render();
  },
  handleClick: function() {
    //allow user to enter a new roomname
    var roomname = prompt('Enter you roomname');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
};

