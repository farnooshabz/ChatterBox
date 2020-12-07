var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $option: $('#rooms option'),

  initialize: function() {
    //set up click functionality:
    RoomsView.$button.on('click', function() {
      let newRoom = prompt('Your cool room name here:');
      Rooms.storage.push(newRoom); //now it is a set
      RoomsView.render();
    });
    //call render
    RoomsView.render();

    //update current room prop when selecting room
    RoomsView.$select.on('change', function() {
      //
      App.currentRoom = $('option:selected').val();
      MessagesView.render();
    })
  },
  render: function() {
    RoomsView.$select.html('');
    for (let i = 0; i < Rooms.storage.length; i++) {
      let curRoom = Rooms.storage[i];
      RoomsView.$select.append(
        $('<option></option>').val(curRoom).html(curRoom)
      );
    }
  }
};

