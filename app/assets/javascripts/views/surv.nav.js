var surv = surv || {};

surv.Nav = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		home = new surv.Home();
		this.render();
	},
	events: {
		'click #survey' 	: 'renderSurvey',
		'click #register' : 'renderRegister'
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	renderSurvey: function(e) {
		e.preventDefault();
		home.survey();
	},
	renderRegister: function(e) {
		e.preventDefault();
		home.register();
	}
});