var MessagesView = {

  $chats: $('#chats'),
  //iterate through messages on the server
  //call messageView.display(i) if they meet the requirements
  initialize: function() {
    Parse.readAll((data)=>
    //append Tweets
      data.results.forEach(function(element) {
        if (element.roomname) {
          MessageView.display(element);
          console.log(element.roomname);
        }
      })

    );
  },



  render: function() {

    // check roomname and filter --> class
    // $('#chats').html('');
    //filterTweets
    if (App.currentRoom === 'general') {
      $('#chats').children().show();
    } else {
      $('.chat').not('.'+App.currentRoom).hide();
      $('.'+App.currentRoom).show();
    }
    // MessagesView.initialize.call();
    //hide not class

    //show of class (they might be hidden)

    //check friends and format accordingly
  }
};
// MessagesView.render();
