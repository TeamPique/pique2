var Conversation = Backbone.Model.extend({});

var conversaion = new Conversation({
	user1: 
		{
			name: 'Tom Jones',
			avatar: 'http://piqueapp.github.io/assets/img/av.png'
		},
	user2:
		{
			name: 'Tom Jones',
			avatar: 'http://piqueapp.github.io/assets/img/av.png'
		},
	messages:
		[
			{
				timestamp: new Date(),
				message: 'Craig, it\'s important. I just spilled salsa all over my filas.',
				sender: user1,
				recipient: user2
			},
			{
				timestamp: new Date(),
				message: 'I\m not Craig!',
				sender: user2,
				recipient: user1
			}
		];
});