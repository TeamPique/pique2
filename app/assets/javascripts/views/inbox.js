var Inbox = Backbone.View.extend({
	el: '.message-view',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	headerTpl	 : _.template($('#page-header-template').html()),
	initialize: function() {
		$chatbox = $('.message-chats');
		$input 	 = $('#message-input');
		$sidebar = $('#sidebar-items');
		$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
		moment().format();
		this.addAll();
	},
	events: {
		'keypress #message-input' : 'chat'
	},
	addOne: function(conversation) {
		var x = conversation.length;
		var lastMessage = conversation[x - 1].toJSON();
		$sidebar.prepend(this.sidebarPreviewTpl(lastMessage));
		return this;
	},
	addAll: function() {
		var inbox = this.model.get('inbox');
		this.header(inbox[0].models);
		for (var i = 0; i < inbox.length; i++) {
			this.addOne(inbox[i].models);
		}
	},
	chat: function(e) {
		if (e.which === 13) {
			var	newMessage = new Message({
					sender: tomJones,
					recipient: ev,
					timestamp: new Date(),
					content: $input.val(),
				})
			this.send(newMessage);
		$input.val('');
		$input.focus();
  	}
	},
	header: function(conversation) {
		for (var i = 0; i < conversation.length; i++) {
		 	this.send(conversation[i])
		 };
		$('.message-chat').prepend(this.headerTpl());
		return this;
	},
	send: function(message) {
		if (message.get('content') !== '') {
			$chatbox.append(this.chatMessageTpl(message.toJSON()));
			$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
			return this;
		}
	},
});