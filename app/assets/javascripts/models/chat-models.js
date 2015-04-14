var User = Backbone.Model.extend({
	defaults: {
		username: '',
		avatar: '',
	},
});
var Message = Backbone.Model.extend({
	defaults: {
		content: '',
		sender: '',
		recipient: '',
		timestamp: new Date(),
	},
});

var Conversation = Backbone.Collection.extend({
	model: Message,
});