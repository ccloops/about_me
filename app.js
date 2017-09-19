'use strict';

//Class Example Question
var userName = prompt('Thanks for stopping by my About Me page! What is your name?');
alert('Hi, ' + userName + ', nice to meet you. See if you can get the right answers to the following questions about me.');
console.log('User Name is', userName);

//Question 1
var answer1 = prompt('Do I have a fluffy cat?').toLowerCase();
console.log('Answer 1 is', answer1);

//you must repeat answer1 on both sides or it will result in a truthy problem
if(answer1 === 'n' || answer1 === 'no') {
  alert('No no no no, I am sad to say you are wrong');
} else {
  alert('Yes! She moosh, she floof, she\'s very nice');
}

//Question 2
var answer2 = prompt('Do I like karaoke?').toLowerCase();
console.log('Answer 2 is', answer2);

if(answer2 === 'n' || answer2 === 'no') {
  alert('Are you serious!? Of course I love karaoke!');
} else {
  alert('Heck yea!');
}

//Question 3
var answer3 = prompt('Do I know how to sail a sailboat?').toLowerCase();
console.log('Answer 3 is', answer3);

if(answer3 === 'n' || answer3 === 'no') {
  alert('Surprise! You\'re kinda wrong, I kinda know how ; )');
} else {
  alert('You know me so very kinda well, you are kinda right, I kinda know how!')
}

//Question 4
var answer4 = prompt('Is my house the color of grass?').toLowerCase();
console.log('Answer 4 is', answer4);

if(answer4 === 'n' || answer4 === 'no') {
  alert('Trick question! Depends on whether or not it\'s been raining! But basically you got the answer wrong.');
} else {
  alert('Yea, weirdo my house is green');
}

//Question 5
var answer5 = prompt('Do I like the rain?').toLowerCase();
console.log('Answer 5 is', answer5);

if(answer5 === 'n' || answer5 === 'no') {
  alert('Hey now! I have to like it at least a little right?');
} else {
  alert('Yeaaaaa, yea I do : )');
}
