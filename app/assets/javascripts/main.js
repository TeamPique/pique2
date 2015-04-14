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
var messages1 = [m2, m1];
var messages2 = [m1, m2];

var tomJones = 
		{
			name: 'Tom Jones',
			avatar: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDA1Njg4ODQ1.jpg',
			conversations: 
				[
					new Conversation(messages1),
					new Conversation(messages2)
				],
			id: 1
		};

var thomJones =
		{
			name: 'Thom Jones',
			avatar: 'http://nuruinternational.org/annual-report/wp-content/uploads/2014/07/Jake.jpg',
			conversations: 
				[
					new Conversation(messages1),
					new Conversation(messages2)
				],
			id: 2
		};


var u1 = new User(tomJones);
var u2 = new User(thomJones);

new Inbox({model: u1});





// var surv = surv || {};

// new surv.Survey({collection: questions});

// new WOW(
//     { offset: 120 }
// ).init();