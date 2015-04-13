var User = Backbone.Model.extend({});
var Message = Backbone.Model.extend({});
var Conversation = Backbone.Model.extend({});


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



var conversation = new Conversation({
	user1: u1,
	user2: u2,
	messages: 
		[
			{
				timestamp: new Date(),
				message: 'Craig, it\'s important. I just spilled salsa all over my filas.',
				sender: u1,
				recipient: u2
			},
			{
				timestamp: new Date(),
				message: 'I\m not Craig!',
				sender: u2,
				recipient: u1
			}
		]
});

var conversation2 = new Conversation({
	user1: u1,
	user2: u2,
	messages: 
		[
			{
				timestamp: new Date(),
				message: 'I\m not Craig!',
				sender: u2,
				recipient: u1
			},
			{
				timestamp: new Date(),
				message: 'Craig, it\'s important. I just spilled salsa all over my filas.',
				sender: u1,
				recipient: u2
			},
		]
});