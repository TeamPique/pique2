var surv = surv || {};

surv.Questions = Backbone.Collection.extend({
	model: surv.Question,
});

var questionnaire = [
	{
		question: 'How important is the proximity of team members to you?',
		id: 1,
		header: 'Question 1 of 4',
		options: [
			'Not important',
			'Important'
		]
	},
	{
		question: 'What type of projects are you interested in?',
		id: 2,
		header: 'Question 2 of 4',
		options: [
			'Social Good',
			'Social Media',
			'Ed Tech',
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
			'Building Portfolio',
			'Building MVP',
			'Love Building Cool Things'

		]
	},
	{
		question: 'What members of the Pique community are you interested in collaborating with?',
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
	},
	{
		question: 'Ready to get started?',
		id: 5,
		header: 'All Done',
		options: [
			'I have a project',
			'I want to build'
		]
	}
];


var questions = new surv.Questions(questionnaire);