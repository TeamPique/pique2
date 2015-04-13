var Conversation = Backbone.Collection.extend({
	model: Message,
	preview: function() {
		var x 			= this.length;
		var model  	= this.models[x - 1];		
		var content = model.get('content');
		var sender 	= model.get('sender');
		var time 		= model.get('timestamp');
		var name 		= sender.get('name');
		var avatar 	= sender.get('avatar');
		var preview = new Message({
				content: content,
				sender: sender,
				timestamp: time,
				username: name,
				avatar: avatar
			});
		return preview
	},
});