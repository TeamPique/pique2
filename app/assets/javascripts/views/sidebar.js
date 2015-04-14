var Sidebar = Backbone.View.extend({
	el: '.message-view',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	chatMessageTpl	 : _.template($('#chat-message-template').html()),
	initialize: function() {
		$chatbox = $('.message-chats');
		$input 	 = $('#message-input');
		$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
		moment().format();
		this.render();
	},
	events: {
		'keypress #message-input' : 'chat'
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
		if (e.which === 13) {
			this.send(new Message({
					sender: '',
					recipient: '',
					timestamp: new Date(),
					content: $input.val(),
					avatar: 'http://evturn.com/assets/img/ev-winter-yellow.jpg'
				}));
		$input.val('');
		$input.focus();
  	}
	},
	send: function(message) {
		if (message.get('content') !== '') {
			$chatbox.append(this.chatMessageTpl(message.toJSON()));
			$chatbox[0].scrollTop = $chatbox[0].scrollHeight;
			return this;
		}
	},
});