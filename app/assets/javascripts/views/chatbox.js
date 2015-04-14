var Chatbox = Backbone.View.extend({
	el: '.chatbox',
	chatboxTpl: _.template($('#chatbox-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		this.render();
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
});