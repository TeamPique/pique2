var Sidebar = Backbone.View.extend({
	el: '.message-view',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		$chat = $('.message-chats');
		$chat[0].scrollTop = $chat[0].scrollHeight;
		moment().format();
		this.render();
	},
	events: {
		'keyup #message-input' : 'chat'
	},
	render: function() {
		var preview = this.collection.preview();
		$('#sidebar-items').prepend(this.sidebarPreviewTpl(preview.toJSON()));
		return this;
	},
	addAll: function() {
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
	chat: function(e) {
		e.preventDefault();
		if (e.keyCode == 13) {
			var $content = $('#message-input').val();
			console.log($content)
			var newMessage = new Message({
				sender: '',
				recipient: '',
				timestamp: new Date(),
				content: $content,
				avatar: u1.get('avatar')
			});
			$chat.append(this.chatMessageTpl(newMessage.toJSON()));
  	}
		$chat[0].scrollTop = $chat[0].scrollHeight;
	},
});