'use strict';

var question1 = prompt('What is my last name?').toLowerCase();

if (question1 === 'mitchell') {
  alert('Yes, wow you were paying attention!');
} else {
  alert('Sorry, you\'re wrong, I knew this wasn\'t going to go well');
}
console.log('answer is mitchell');

var question2 = prompt('is Cherise a mother?');

if (question2 === 'yes' || 'y') {
  alert('Your right, Cherise has two daughters');
} else {
  alert('I can\'t talk to you when you\'re like this?');
  console.log('answer is yes');
}

var question3 = prompt('Does Cherise like dogs?');

if (question3 === 'yes' || 'y') {
  alert('Yup your right again, Cherise would like to start a pitbull rescue one day!');
} else {
  alert('You hate me huh?');
  console.log('answer is yes');
}

var question4 = prompt('Does Cherise want to be a superhero?');

if (question4 === 'yes') {
  alert('Yup your correctamundo! Cherise already thinks she is a ninja and she calls herself THE ARROGANT NINJA!');
} else {
  alert('There are other people on this planet besides you, SMH');
  console.log('answer is yes');
}

var question5 = prompt('What special lifestyle/eating habit does Cherise follow?');

if (question5 === 'vegan') {
  alert('Great, Cherise is a Vegan!');
} else {
  alert('Nope Nope and Nope, must be all that meat on the brain!');
  console.log('answer is vegan');
}
