var thomJones =
		{
			name: 'Thom Jones',
			avatar: 'http://nuruinternational.org/annual-report/wp-content/uploads/2014/07/Jake.jpg',
		};
var tomJones = {name: 'Tom Jones',
			avatar: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDA1Njg4ODQ1.jpg'}
var u2 = new User(thomJones);
var u1 = new User({
			user: tomJones,
			inbox: 
				[
					new Conversation(
						
							[new Message({timestamp: new Date(), content: 'Craig, it\'s important. I just spilled salsa all over my filas.', sender: tomJones, recipient: thomJones}), new Message({timestamp: new Date(), content: 'I\m not Craig!', sender: thomJones, recipient: tomJones}), new Message({timestamp: new Date(), content: 'Fuck the hell off!', sender: thomJones, recipient: tomJones})
						])
				],
			
			id: 1
		});



 

new Inbox({model: u1});





// var surv = surv || {};

// new surv.Survey({collection: questions});

// new WOW(
//     { offset: 120 }
// ).init();