var Sidebar = Backbone.View.extend({
	el: '.message-view',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		moment().format();
		var time = new Date();
		this.render();
	},
	events: {
		'keyup #message-input' : 'chat'
	},
	render: function() {
		var preview = this.collection.preview();
		$('#sidebar-items').prepend(this.sidebarPreviewTpl(preview.toJSON()));
		return this;
	},
	addAll: function() {
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
	chat: function(e) {
		if (e.keyCode == 13) {
			var $chat = $('.message-chats');
			$chat[0].scrollTop = $chat[0].scrollHeight;
			$chat.append(this.chatMessageTpl());
			$chat[0].scrollTop = $chat[0].scrollHeight;
    	$(this).val('');
  	}
	},
});