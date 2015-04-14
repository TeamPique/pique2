// var Sidebar = Backbone.View.extend({
// 	el: '#sidebar-items',
// 	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
// 	initialize: function() {

// 	},
// 	addOne: function(conversation) {
// 		var x = conversation.length;
// 		var lastMessage = conversation[x - 1].toJSON();
// 		$sidebar.append(this.sidebarPreviewTpl(lastMessage));
// 		return this;
// 	},
// 	addAll: function() {
// 		var inbox = this.model.get('inbox');
// 		this.header(inbox[0].models);
// 		for (var i = 0; i < inbox.length; i++) {
// 			this.addOne(inbox[i].models);
// 		}
// 	},
// });