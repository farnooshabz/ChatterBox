var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function() {
      let newRoom = prompt('Your cool room name here:');
      Rooms.storage.push(newRoom);
      RoomsView.render();
    });
    RoomsView.render();
  },
  render: function() {
    this.$select.html('');
    for (let i = 0; i < Rooms.storage.length; i++) {
      let curRoom = Rooms.storage[i];
      this.$select.append(
        $('<option></option>').val(curRoom).html(curRoom)
      );
    }
  }
};

