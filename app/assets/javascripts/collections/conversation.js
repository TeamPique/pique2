var Conversation = Backbone.Collection.extend({
	model: Message,
	preview: function() {
		var x 				= this.length;
		var model  		= this.models[x - 1];		
		var content 	= model.get('content');
		var recipient = model.get('recipient');
		var time 			= model.get('timestamp');
		var name 			= recipient.get('name');
		var avatar 		= recipient.get('avatar');
		var preview 	= new Message({
				content: content,
				recipient: recipient,
				timestamp: time,
				username: name,
				avatar: avatar
			});
		return preview
	},
	users: [],
	messages: [],
});