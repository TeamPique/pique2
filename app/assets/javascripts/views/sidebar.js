var Sidebar = Backbone.View.extend({
	el: '.message-view',
	sidebarMessageTpl: _.template($('#sidebar-message-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var preview = this.collection.preview();
		$('#sidebar-items').prepend(this.sidebarMessageTpl(preview.toJSON()));
		return this;
	},
	addAll: function() {
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
});