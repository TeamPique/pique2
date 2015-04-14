var Chatbox = Backbone.View.extend({
	el: '.chatbox',
	chatboxTpl: _.template($('#chatbox-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		this.render();
		$input = $('#message-input');
	},
	events: {
		'keypress #message-input' : 'send'
	},
	render: function() {
		this.$el.html(this.chatboxTpl(this.model.toJSON()));
		$('.message-chats')[0].scrollTop = $('.message-chats')[0].scrollHeight;
		this.messages(this.model.get('messages'));
		return this;
	},
	messages: function(messages) {
		for (var i = 0; i < messages.length; i++) {
			$('.message-chats').append(this.chatMessageTpl(messages[i]));
		}
	},
	send: function(e) {
		if (e.which === 13) {
			var content = $input.val();
			console.log(content);
			var user = this.model.get('users');
			var message = Object.create({
				content: content,
				sender: user[0],
				timestamp: new Date(),
			});
			console.log(message)
		$('.message-chats').append(this.chatMessageTpl(message));	
			var messages = this.model.get('messages');
			messages.push(message);

  	$input.val('');
		$input.focus();
  	}
	},
});