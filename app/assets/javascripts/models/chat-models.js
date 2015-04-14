var User = Backbone.Model.extend({
	defaults: {
		username: '',
		avatar: '',
		inbox: [],
	},
});

var Conversation = Backbone.Model.extend({
	defaults: {
		users: [],
		messages: [],
	},
	chat: function() {
		var message = new Message: {
			content: this.content,
			sender: this.sender,
			timestamp: new Date(),
		}
		this.messages.push(message);
		return message
	},

});