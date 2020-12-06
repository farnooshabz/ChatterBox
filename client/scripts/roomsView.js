var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $option: $('#rooms option'),

  initialize: function() {
    //set up click functionality:
    this.$button.on('click', function() {
      let newRoom = prompt('Your cool room name here:');
      Rooms.storage.push(newRoom);
      RoomsView.render();
    });
    //call render
    RoomsView.render();

    //update current room prop when selecting room
    this.$select.on('change', function() {
      //
      App.currentRoom = $('option:selected').val();
      MessagesView.render();
    })
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

