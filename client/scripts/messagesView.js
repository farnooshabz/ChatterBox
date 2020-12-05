var MessagesView = {

  $chats: $('#chats'),
  //iterate through messages on the server
  //call messageView.display(i) if they meet the requirements
  initialize: function() {
    Parse.readAll((data)=>
    // console.log('this should be our data', Array.isArray(data.results))
      data.results.forEach(function(element) {
        if (element.roomname) {
          MessageView.display(element);
          console.log(element.roomname);
        }
      })
    );
  },

  //
  render: function() {
    //check roomname and filter --> class
    //check friends and format

    setTimeout(MessagesView.initialize, 10000);
  }

};
// MessagesView.render();

// var msg = new messages ('Thomas', 'hi there', 'main');
// $(() => App.initialize());