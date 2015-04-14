var Chat = Backbone.View.extend({
	el: '.message-view',
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		$input 	 = $('#message-input');
		$sidebar = $('#sidebar-items');
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
	send: function(message) {
		if (message.get('content') !== '') {
			$chatbox.append(this.chatMessageTpl(message.toJSON()));
			$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
			return this;
		}
	},
});