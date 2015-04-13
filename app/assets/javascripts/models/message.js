var User = Backbone.Model.extend({
	defaults: {
		username: '',
		avatar: '',
		conversations: ''
	},
});
var Message = Backbone.Model.extend({
	content: '',
	timestamp: new Date(),
	sender: '',
	recipient: ''
});

var tomJones = 
		{
			name: 'Tom Jones',
			avatar: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDA1Njg4ODQ1.jpg'
		};
var tomCruise =
		{
			name: 'Thom Jones',
			avatar: 'http://nuruinternational.org/annual-report/wp-content/uploads/2014/07/Jake.jpg'
		};

var u1 = new User(tomJones);
var u2 = new User(tomCruise);
var m1 = new Message({
	timestamp: new Date(),
	content: 'Craig, it\'s important. I just spilled salsa all over my filas.',
	sender: u1,
	recipient: u2
});
var m2 = new Message({
	timestamp: new Date(),
	content: 'I\m not Craig!',
	sender: u2,
	recipient: u1
});