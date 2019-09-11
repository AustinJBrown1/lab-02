'use strict'
var answerFeel = prompt('Have you had a good day? (y/n)').toLowerCase();
if(answerFeel === 'yes' || answerFeel === 'y')
{ alert('Thats great, I hope it keeps being great!');console.log('User had great day');}
else{
alert('I\'m sorry. I hope something happens to make it better.');console.log('User had bad day')};

var answerDog = prompt('Did you see you see any nice dogs on way to work/school? (y/n)').toLowerCase();
if(answerDog === 'yes' || answerDog === 'y')
{ alert('I\'m sure they must have been a good dog!');console.log('User saw a nice dog');}
else{
alert('Maybe next time.');console.log('User did not see a nice dog')};

var answerCar = prompt('Did you drive to work/school today? (y/n)').toLowerCase();
if(answerCar === 'yes' || answerCar === 'y')
{ alert('I hope you didn\'t have any trouble getting here!');console.log('User drove today');}
else{
alert('Thats great! Reducing the amount you drive is great for the environment!.');console.log('User did not drive')};

var answerSleep = prompt('Did you get a good night\'s sleep? (y/n)').toLowerCase();
if(answerSleep === 'yes' || answerSleep === 'y')
{ alert('Its always good to be well rested!');console.log('User got sleep');}
else{
alert('You should always try to at least eight hours of sleep a night.');console.log('User did not get sleep')};

var answerMe = prompt('Did you enjoy my web page? (y/n)').toLowerCase();
if(answerMe === 'yes' || answerMe === 'y')
{ alert('Thank you, that means a lot to me!');console.log('User enjoyed web page');}
else{
alert('Ah, thats to bad, tell me what I could do to improve it.');console.log('User did not enjoy web page, need improvement.')};