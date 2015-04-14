var Chat = Backbone.View.extend({
	el: '.message-view',
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	headerTpl	 : _.template($('#page-header-template').html()),
	initialize: function() {
		$chatbox = $('.message-chats');
		$input 	 = $('#message-input');
		$sidebar = $('#sidebar-items');
		$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
		moment().format();
		this.addSidebar();
	},
	events: {
		'keypress #message-input' : 'chat'
	},
	addSidebarItems: function(conversation) {
		var view = new Sidebar({model: conversation});
		return this;
	},
	addSidebar: function() {
		var inbox = this.model.get('inbox');
		for (var i = 0; i < inbox.length; i++) {
			this.addSidebarItems(inbox[i])			
		}
	},
	sender: function(e) {
		if (e.which === 13) {
			var content = $input.val();
			var message = this.model.chat(content);
			this.send(message);
		$input.val('');
		$input.focus();
  	}
	},
	header: function(conversation) {
		for (var i = 0; i < conversation.length; i++) {
		 	this.send(conversation[i])
		 };
		$('.message-chat').prepend(this.headerTpl(conversation[0].toJSON()));
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