var MessageView = {
  render: _.template(`

    <div class="<%- roomname %> chat" >
      <div class="username" data-username="<%- username %>"> <%- username %> </div>
      <div class="message"><%- text %></div>
    </div>

  `),
};
