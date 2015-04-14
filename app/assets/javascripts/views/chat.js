var Chat = Backbone.View.extend({
	el: '#sidebar-items',
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		$sidebar = $('#sidebar-items');
		moment().format();
		this.addSidebar();
	},
	addSidebarItems: function(conversation) {
		var view = new Sidebar({model: conversation});
		this.$el.append(view.el)
	},
	addSidebar: function() {
		var inbox = this.model.get('inbox');
		for (var i = 0; i < inbox.length; i++) {
			this.addSidebarItems(inbox[i])			
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