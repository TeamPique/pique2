var beta = beta || {};

beta.User = Backbone.Model.extend({
	defaults: {
		name: '',
		email: ''
	},
});