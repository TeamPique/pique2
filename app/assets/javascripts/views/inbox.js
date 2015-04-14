var Inbox = Backbone.View.extend({
	el: '.message-view',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
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
		for (var i = 0; i < inbox.length; i++) {
			this.addOne(inbox[i].models);
		}
	},
	chat: function(e) {
		if (e.which === 13) {
			this.send(new Message({
					sender: '',
					recipient: '',
					timestamp: new Date(),
					content: $input.val(),
					avatar: 'http://evturn.com/assets/img/ev-winter-yellow.jpg'
				}));
		$input.val('');
		$input.focus();
  	}
	},
	send: function(message) {
		if (message.get('content') !== '') {
			$chatbox.append(this.chatMessageTpl(message.toJSON()));
			$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
			return this;
		}
	},
});