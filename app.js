'use strict';

//Class Example Question
var userName = prompt('Thanks for stopping by my About Me page! What is your name?');
alert('Hi, ' + userName + ', nice to meet you. See if you can get the right answers to the following questions about me.');
console.log('User Name is', userName);

//Question 1
var answer1 = prompt('Do I have a fluffy cat?').toLowerCase();
console.log('Do I have a fluffy cat? User response to Answer 1:', answer1);

//you must repeat answer1 on both sides or it will result in a truthy problem
if(answer1 === 'y' || answer1 === 'yes') {
  alert('Yes! She moosh, she floof, she\'s very nice');
} else {
  alert('No no no no, I am sad to say you are wrong');
}

//Question 2
var answer2 = prompt('Do I hate karaoke?').toLowerCase();
console.log('Do I hate karaoke? User response to Answer 2:', answer2);

if(answer2 === 'n' || answer2 === 'no') {
  alert('Yea you got it right! I love karaoke!');
} else {
  alert('Awww, no I don\'t hate karaoke, it\'s the best!');
}

//Question 3
var answer3 = prompt('Do I know how to sail a sailboat?').toLowerCase();
console.log('Do I know how to sail a sailboat? User response to Answer 3:', answer3);

if(answer3 === 'y' || answer3 === 'yes') {
  alert('You know me so very kinda well, you are kinda right, I kinda know how!');
} else {
  alert('Surprise! You\'re kinda wrong, I kinda know how ; )')
}

//Question 4
var answer4 = prompt('Is my house the color of grass?').toLowerCase();
console.log('Is my house the color of grass? User response to Answer 4:', answer4);

if(answer4 === 'y' || answer4 === 'yes') {
  alert('Yea, weirdo my house is green');
} else {
  alert('Trick question! Depends on whether or not it\'s been raining! But basically you got the answer wrong.');
}

//Question 5
var answer5 = prompt('Do I like the rain?').toLowerCase();
console.log('Do I like the rain? User response to Answer 5:', answer5);

if(answer5 === 'y' || answer5 === 'yes') {
  alert('Yeaaaaa, yea I do : )');
} else {
  alert('Hey now! I have to like it at least a little right?');
}
