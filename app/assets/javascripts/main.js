var thomJones =
		{
			name: 'Thom Jones',
			avatar: 'http://nuruinternational.org/annual-report/wp-content/uploads/2014/07/Jake.jpg',
		};
var tomJones = {name: 'Tom Jones',
			avatar: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDA1Njg4ODQ1.jpg'}
var ev = {name: 'Evan Turner',
			avatar: 'http://evturn.com/assets/img/ev-winter-yellow.jpg'}



var convo1 = new Conversation(
						
							[new Message({timestamp: new Date(), content: 'Craig, it\'s important. I just spilled salsa all over my filas.', sender: tomJones, recipient: thomJones}), new Message({timestamp: new Date(), content: 'I\m not Craig!', sender: thomJones, recipient: tomJones}), new Message({timestamp: new Date(), content: 'Fuck the hell off!', sender: thomJones, recipient: tomJones})
						]);
var convo2 = new Conversation(
						
							[new Message({timestamp: new Date(), content: 'Craig, it\'s important. I just spilled salsa all over my filas.', sender: tomJones, recipient: thomJones}), new Message({timestamp: new Date(), content: 'I\m not Craig!', sender: thomJones, recipient: tomJones}), new Message({timestamp: new Date(), content: 'Just ate a bisquit', sender: tomJones, recipient: thomJones})
						])
var convo3 = new Conversation(
						
							[new Message({
								timestamp: new Date(), 
								content: 'Craig, it\'s important. I just spilled salsa all over my filas.', sender: tomJones, 
								recipient: thomJones}), 
							new Message({timestamp: new Date(), content: 'I\m not Craig!', sender: thomJones, recipient: tomJones}), new Message({timestamp: new Date(), content: 'Please leave my wife in this', sender: ev, recipient: thomJones})
						])

var u2 = new User(thomJones);

var u1 = new User({
			user: tomJones,
			inbox: 
				[
					convo1,
					convo2,
					convo3
				],
			
			id: 1
		});


new Chat({model: u1});





// var surv = surv || {};

// new surv.Survey({collection: questions});

// new WOW(
//     { offset: 120 }
// ).init();