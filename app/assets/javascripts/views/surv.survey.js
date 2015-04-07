var surv = surv || {};

surv.Survey = Backbone.View.extend({
	el: '#questionnaire',
	surveyTemplate: _.template($('#question-template').html()),
	initialize: function() {
		this.question();
	},
	events: {
		'click .question' : 'rotate'
	},
  rotate: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    if (id === 4) {
    	alert('You\'re done. Thanks.')
    	return false;
    } else {
	    var next = id += 1;
	    var question = this.collection.get(next);
	    this.question(question);
    }
  },
	question: function(model) {
		console.log('sup');
		var model = model || this.collection.get(1);
		var id = model.get('id');
		$divId = $('#question-' + id);
		$divId.append(this.surveyTemplate(model.toJSON()));
		setTimeout(function() {
			this.pan(id);
			
		}.bind(this), 500);
		return this;
	},
	pan: function(id) {
	  $('html, body').animate({
	    scrollTop: $("#question-" + id).offset().top
	  }, 2000);
	},
});