var MessageView = {
  render: _.template(`

  <div class="<%- roomname %> chat" >
    <div class="username"><%- username %></div>
    <div class="message"><%- text %></div>
  </div>

  `),



};



// //displayNewMessage(object) {
// display: function (obj) {
// //1 render(object)
//   var rendered = '';
//   rendered += MessageView.render(obj);
//   //2 append
//   $('#chats').append(rendered);