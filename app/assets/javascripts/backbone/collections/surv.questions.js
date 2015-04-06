var surv = surv || {};

surv.Questions = Backbone.Collection.extend({
	model: surv.Question,
	url: '/questions'
});

var questionnaire = [
	{
		question: 'How important is the proximity of team members to you?',
		id: 1,
		header: 'Question 1 of 4',
		options: [
			'No important',
			'Important'
		]
	},
	{
		question: 'What type of projects are you interested in?',
		id: 2,
		header: 'Question 2 of 4',
		options: [
			'Mobile Apps',
			'Web Apps',
			'Social Good',
			'Social Media',
			'Networking',
			'Fin Tech',
			'Fashion',
			'Food',
			'Travel'
		]
	},
	{
		question: 'What brings you on?',
		id: 3,
		header: 'Question 3 of 4',
		options: [
			'Networking',
			'Build Portfolio',
			'Building MVP',
			'Improve Skills',
			'Love Building Cool Things'

		]
	},
	{
		question: 'What type of users are you interested in collaborating with?',
		id: 4,
		header: 'Question 4 of 4',
		options: [
			'Designers',
			'Developers',
			'Project Managers',
			'Marketers',
			'Biz Dev',
			'Anyone with Strong Work Ethic'
		]
	}
];


var questions = new surv.Questions(questionnaire);