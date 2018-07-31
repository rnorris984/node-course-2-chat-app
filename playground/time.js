var moment = require('moment');

// var date = new Date();
// var months = []
// console.log(date.getMonth());

new Date().getTime();
someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234; 
var date = moment(createdAt);
// date.add(75, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
