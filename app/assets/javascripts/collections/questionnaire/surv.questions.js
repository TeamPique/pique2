var surv = surv || {};

surv.Questions = Backbone.Collection.extend({
	model: surv.Question,
	url: '/questionnaire'
});

var questionnaire = [
	{

		question: 'What is your current position',
		id: 1,
		header: 'Question 1 of 5',
		options: [
			['Designers'],
			['Developers'],
			['Project Managers'],
			['Marketers'],
			['Biz Dev']
		]
	},
	{
		question: 'What members of the Pique community are you interested in collaborating with?',
		id: 2,
		header: 'Question 2 of 5',
		options: [
			['Designers'],
			['Developers'],
			['Project Managers'],
			['Marketers'],
			['Biz Dev'],
			['Anyone with Strong Work Ethic']
		]
	},
	{
		question: 'What type of projects are you interested in?',
		id: 3,
		header: 'Question 3 of 5',
		options: [
			['Social Good'],
			['Social Media'],
			['Ed Tech'],
			['Fin Tech'],
			['Fashion'],
			['Food'],
			['Travel'],
			['Any Project']
		]
	},
	{
		question: 'How many hours are you looking to spend each week on a project?',
		id: 4,
		header: 'Question 4 of 5',
		options: [
			['1 - 4'],
			['4 - 8'],
			['8 - 12'],
			['+12']
		]
	},
	{
		question: 'What brings you on?',
		id: 5,
		header: 'Question 5 of 5',
		options: [
			['Networking'],
			['Building Portfolio'],
			['Building MVP'],
			['Love Building Cool Things']
		]
	},
	{
		question: 'Are you ready to get started?',
		id: 6,
		header: 'All Done',
		options: [
			['Yeah, I want to find a project to work on', '/projects'],
			['Yeah, I want to find people to build a project with', '/users']
		]
	}
];


var questions = new surv.Questions(questionnaire);