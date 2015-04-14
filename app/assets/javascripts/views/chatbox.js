var Chatbox = Backbone.View.extend({
	el: '.chatbox',
	chatboxTpl: _.template($('#chatbox-template').html()),
	initialize: function() {
		this.render();
		$chatbox = $('.message-chats');
		$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
	},
	render: function() {

		$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
		return this;
	},
});