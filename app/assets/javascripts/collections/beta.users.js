var beta = beta || {};

beta.Users = Backbone.Firebase.Collection.extend({
	model: beta.User,
	url: 'https://pique-beta-test.firebaseio.com/users',
});