'use strict';

var correct = 0;

var question1 = prompt('What is my last name?').toLowerCase();

if (question1 === 'mitchell') {
  alert('Yes, wow you were paying attention!');
  correct += 1;
} else {
  alert('Sorry, you\'re wrong, I knew this wasn\'t going to go well');
}
console.log('answer is mitchell');

var question2 = prompt('is Cherise a mother?');

if (question2 === 'yes' || 'y') {
  alert('Your right, Cherise has two daughters');
  correct += 1;
} else {
  alert('I can\'t talk to you when you\'re like this?');
}
console.log('answer is yes');

var question3 = prompt('Does Cherise like dogs?');

if (question3 === 'yes') {
  alert('Yup your right again, Cherise would like to start a pitbull rescue one day!');
  correct += 1;
} else {
  alert('You hate me huh?');
}
console.log('answer is yes');

var question4 = prompt('Does Cherise want to be a superhero?');

if (question4 === 'yes') {
  alert('Yup your correctamundo! Cherise already thinks she is a ninja and she calls herself THE ARROGANT NINJA!');
  correct += 1;
} else {
  alert('There are other people on this planet besides you, SMH');
}
console.log('answer is yes');


var question5 = prompt('What special lifestyle/eating habit does Cherise follow?');

if (question5 === 'vegan') {
  alert('Great, Cherise is a Vegan!');
  correct += 1;
} else {
  alert('Nope Nope and Nope, must be all that meat on the brain!');
}
console.log('answer is vegan');

var answer = 4;
var counter = 0;
var attempts = 4;

while (counter < attempts) {
  var question6 = prompt('What is Cherise\'s favorite number?');
  if(question6 === '4'){
    alert('Correct, you got it right!');
    counter = 4; }
  if(question6 > '4'){
    alert('Nope, your asnwer is too high, try again!');
    counter += 1; }
  if(question6 < '4') {
    alert('Sorry, your guess is too low!');
    counter += 1;}
}

var cheriseKnows = ['automotive', 'project management', 'accounting', 'business', 'coding'];
for(var i=0; i < cheriseKnows.length; i++) {
var question7 = prompt('Can you name one subject that Cherise has studied in college?');
}
if(question7 === cheriseKnows[i]) {
  alert('Sorry, that is the wrong answer!');
}
if(i === 4) {
  alert('Your time is running out, one chance left!');
}
alert('The tally is in, you got ' + correct + ' out of 7 questions');
