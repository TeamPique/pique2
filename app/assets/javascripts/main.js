// var surv = surv || {};

// new surv.Survey({collection: questions});

// new WOW(
//     { offset: 120 }
// ).init();



var messages1 = [m2, m1];
var messages2 = [m1, m2];
var conversation1 = new Conversation(messages1);
var conversation2 = new Conversation(messages2);
new Sidebar({collection: conversation1});
new Sidebar({collection: conversation2});