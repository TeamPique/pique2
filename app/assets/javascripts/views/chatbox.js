var Chatbox = Backbone.View.extend({
	el: '.chatbox',
	chatboxTpl: _.template($('#chatbox-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.chatboxTpl(this.model.toJSON()));
		$('.message-chats')[0].scrollTop = $('.message-chats')[0].scrollHeight;
		return this;
	},
});