var Message = Backbone.View.extend({
	el: '.message-view',
	sidebarMessageTpl: _.template($('#sidebar-message-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		$('.sidebar-item').prepend(this.sidebarMessageTpl(tomJones.toJSON()));
		return this;
	},
});