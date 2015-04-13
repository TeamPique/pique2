var User = Backbone.Model.extend({});
var Conversation = Backbone.Model.extend({});


var tomJones = 
		{
			name: 'Tom Jones',
			avatar: 'http://piqueapp.github.io/assets/img/av.png'
		};
var tomCruise =
		{
			name: 'Tom Jones',
			avatar: 'http://piqueapp.github.io/assets/img/av.png'
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