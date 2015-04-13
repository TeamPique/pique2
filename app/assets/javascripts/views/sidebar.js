var Sidebar = Backbone.View.extend({
	el: '.message-view',
	sidebarMessageTpl: _.template($('#sidebar-message-template').html()),
	initialize: function() {
		this.render();
	},
	addOne: function() {
		var x 			= this.collection.length;
		var model  	= this.collection.models[x - 1];		
		var content = model.get('content');
		var sender 	= model.get('sender');
		var time 		= model.get('timestamp');
		var name 		= sender.get('name');
		var avatar 	= sender.get('avatar');
		console.log(avatar);
		var preview = new Message({content: content, sender: sender, timestamp: time, username: name, avatar: avatar});
		$('#sidebar-items').prepend(this.sidebarMessageTpl(preview.toJSON()));
		return this;
	},
	addAll: function() {
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
});