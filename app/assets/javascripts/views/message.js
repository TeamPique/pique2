var Message = Backbone.View.extend({
	el: '.message-view',
	sidebarMessageTpl: _.template($('#sidebar-message-template').html()),
	initialize: function() {
		this.render();
	},
	addOne: function(model) {
		var messages = model.get('messages');
		var last 		 = model.get('messages').length;
		var preview  = messages[last - 1];		
		$('#sidebar-items').prepend(this.sidebarMessageTpl());
		$('.preview-username').html(preview.sender.attributes.name);
		$('.preview-message').html(preview.message)
		$('.message-av').attr('src', preview.sender.attributes.avatar);
		return this;
	},
});