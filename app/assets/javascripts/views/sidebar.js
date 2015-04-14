var Sidebar = Backbone.View.extend({
	el: '#sidebar-items',
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		$sidebar = $('#sidebar-items');
		moment().format();
		this.addSidebar();
	},
	addSidebarItem: function(conversation) {
		var view = new SidebarItem({model: conversation});
		this.$el.append(view.el)
	},
	addSidebar: function() {
		var inbox = this.model.get('inbox');
		for (var i = 0; i < inbox.length; i++) {
			this.addSidebarItem(inbox[i])			
		}
	},
});