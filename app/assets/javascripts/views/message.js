var Message = Backbone.View.extend({
	el: '.wrapper',
	sidebarMessageTpl: _.template($('#sidebar-message-template').html()),
});