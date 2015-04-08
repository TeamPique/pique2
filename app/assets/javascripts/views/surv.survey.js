var surv = surv || {};

surv.Survey = Backbone.View.extend({
	el: '#questionnaire',
	surveyTemplate: _.template($('#question-template').html()),
	initialize: function() {
		this.question();
	},
	events: {
		'click .surv-question' : 'rotate'
	},
  rotate: function(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    if (id !== 5) {
	    var next = id += 1;
	    var question = this.collection.get(next);
	    this.question(question);
    } 
  },
	question: function(model) {
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
	  }, 1000);
	  this.svg();
	},
	svg: function() {
			(function() {    
  
  function init() {
    var speed = 250,
        easing = mina.easeinout;
  
    [].slice.call (document.querySelectorAll('#grid > a')).forEach(function(el) {
        var s = Snap(el.querySelector('svg') ), path = s.select('path'),
       pathConfig = {
           from : path.attr('d'),
           to : el.getAttribute('data-path-hover')
       };
  
        el.addEventListener('mouseenter', function() {
       path.animate({'path' : pathConfig.to}, speed, easing);
        });
  
        el.addEventListener('mouseleave', function() {
       path.animate({'path' : pathConfig.from}, speed, easing);
        });
    });
  }
  
  init();
  
})();
  
	},
});