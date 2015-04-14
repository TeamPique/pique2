var User = Backbone.Model.extend({
	defaults: {
		username: '',
		avatar: '',
		inbox: [],
	},
});
var Message = Backbone.Model.extend({
	content: '',
	sender: '',
	recipient: '',
	timestamp: new Date(),
});