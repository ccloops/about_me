'use strict';
//
// var score = 0;
//
// //Class Example Question
// var userName = prompt('Hello!!! Welcome to me! Thanks for coming. What is your name?');
// alert('Hi, ' + userName + ', nice to meet you. See if you can get the right answers to the following questions about me.');
// console.log('User Name is', userName);
//
// //Question 1
// var answer1 = prompt('Do I have a fluffy cat?').toLowerCase();
// console.log('Do I have a fluffy cat? User response to Answer 1:', answer1);
//
// //you must repeat answer1 on both sides or it will result in a truthy problem
// if(answer1 === 'y' || answer1 === 'yes') {
//   alert('Yes! She moosh, she floof, she\'s very nice');
//   score++;
// } else {
//   alert('No no no no, I am sad to say you are wrong. I definitely have a fluffy cat!');
// }
//
// //Question 2
// var answer2 = prompt('Do I hate karaoke?').toLowerCase();
// console.log('Do I hate karaoke? User response to Answer 2:', answer2);
//
// if(answer2 === 'n' || answer2 === 'no') {
//   alert('Yea you got it right! I love karaoke!');
//   score++;
// } else {
//   alert('Awww, no I don\'t hate karaoke, it\'s the best!');
// }
//
// //Question 3
// var answer3 = prompt('Do I know how to sail a sailboat?').toLowerCase();
// console.log('Do I know how to sail a sailboat? User response to Answer 3:', answer3);
//
// if(answer3 === 'y' || answer3 === 'yes') {
//   alert('You know me so very kinda well, you are kinda right, I kinda know how!');
//   score++;
// } else {
//   alert('Surprise! You\'re kinda wrong, I kinda know how ; )');
// }
//
// //Question 4
// var answer4 = prompt('Is my house the color of grass?').toLowerCase();
// console.log('Is my house the color of grass? User response to Answer 4:', answer4);
//
// if(answer4 === 'y' || answer4 === 'yes') {
//   alert('Yea, weirdo my house is green');
//   score++;
// } else {
//   alert('Trick question! Depends on whether or not it\'s been raining! But basically you got the answer wrong.');
// }
//
// //Question 5
// var answer5 = prompt('Do I like the rain?').toLowerCase();
// console.log('Do I like the rain? User response to Answer 5:', answer5);
//
// if(answer5 === 'y' || answer5 === 'yes') {
//   alert('Yeaaaaa, yea I do : )');
//   score++;
// } else {
//   alert('Hey now! I have to like it at least a little right?');
// }
//
// var guessCount = 0;
//
// //Question 6
//
// while (answer6 !== 25 && guessCount < 4) {
//   var answer6 = parseInt(prompt('How old am I? You have 4 opportunities to answer correctly. Good luck'));
//   console.log('How old am I? User response to Answer 6:', answer6);
//
//   if(answer6 === 25) {
//     guessCount++;
//     alert('Congratulations! You guessed correctly! I\'m 25 for now.');
//     break;
//   } else if(answer6 < 25) {
//     guessCount++;
//     alert('Nope! I\'m older than you think! Try again.');
//   } else if(answer6 > 25) {
//     guessCount++;
//     alert('Nope! I\'m younger than you think! Try again.');
//   }
//   if(guessCount === 4) {
//     alert('Oh no! You\'re all out of guesses! Better luck next time!');
//   }
//   console.log(guessCount, 'Guess Count');
// }

//Question 7: As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

var hairColorGuessCount = 0;

var hairColors = ['blonde', 'red', 'blue', 'pink', 'green'];

while (hairColorGuessCount < 7) {
  var answer7 = prompt('Can you guess a color that my hair has been?');
  console.log('What colors have my hair been? User response to Question 7', answer7);
  
  if(answer7 === hairColors[i]) {
    alert('Congratulations! You guessed a correct answer!');
    break;
  } else {
    alert('Nope! Try again!');
    hairColorGuessCount++;
  }
  if(hairColorGuessCount === 6) {
    alert('Too many guesses! Better luck next time!');
  }
  //
  // if(answer7 === 'blonde' || 'red' || 'blue' || 'pink' || 'green') {
  //   alert('Congratulations! You guessed a correct answer!');
  //   hairColorGuessCount++;
  //   break;
  // } else {
  //   alert('Nope! Try again!');
  //   hairColorGuessCount++;
  // }

  for (var i = 0; i < hairColors.length; i++) {

  }
}

//Scoring Time!

if(score === 0) {
  alert('Booooooo! You answered 0 out of 7 questions correctly. I am so disappointed.');
} else if(score === 1) {
  alert('Terrible job,' + userName + '. You answered 1 out of 7 questions correctly.');
} else if(score === 2) {
  alert('Come on, ' + userName + ' you can do better! You answered 2 out of 7 questions correctly.');
} else if(score === 3) {
  alert('Slightly below average, ' + userName + '. You answered 3 out of 7 questions correctly.');
} else if(score === 4) {
  alert('Not bad, ' + userName + '. You got more than 50% of the questions correct! You answered 4 out of 7 questions correctly.');
} else if(score === 5) {
  alert('Congrats, ' + userName + ' you kind of know me! You answered 5 out of 7 questions correctly.');
} else if(score === 6) {
  alert('Almost, ' + userName + '! You almost won the game! You answered 6 out of 7 questions correctly.');
} else {
  alert('Heck ya! You won, ' + userName + '! You answered all 7 questions correctly!');
}
