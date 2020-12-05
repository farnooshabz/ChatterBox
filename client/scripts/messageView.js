var MessageView = {
  render: _.template(`

  <div class="<%- roomname %> chat" >
  <div class="username"><%- username %></div>
  <div class="message"><%- text %></div>
  </div>

  `),
  //displayNewMessage(object) {
  display : function (obj) {
  //1 render(object)
    var rendered = '';
    rendered += MessageView.render(obj);
    //2 append
    $('#chats').append(rendered);

  }
};
  //render(user, text, room) ==> returns HTML node matching template's style
  //append to the div with id: chats

//   var template = _.template("<b><%- value %></b>");
//   template({value: '<script>'});
//  console => "<b>&lt;script&gt;</b>"


//$(() => App.initialize())
var message = {
  username: 'shawndrost',
  text: 'THANK YOU',
  roomname: '4chan'

};
MessageView.display(message);
