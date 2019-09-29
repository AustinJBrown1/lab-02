'use strict';

var name = prompt('What is your name?');
alert('Hello ' + name +', welcome to my webpage!');
alert('Now that introductions are in order, would you like to take a short quiz?');
//////////////////////////////////////////////////////////////////////////////\
var answerTown = prompt('Am I from a town in texas? (y/n)').toLowerCase();

town();
function town() {
  if(answerTown === 'yes' || answerTown === 'y'){
    alert('Right, its a lovely place just north of Dallas!');
    console.log('Yeehaw, pardner!');
  }else{
    alert('Wrong, its a town north of Dallas.');
    console.log('What in tarnation?!');
  }
}
////////////////////////////////////////////////////////////////////////////\
var answerBirthDay = prompt('Is my birth day in october? (y/n)').toLowerCase();

birthDay();
function birthDay(){
  if(answerBirthDay === 'yes' || answerBirthDay === 'y'){
    alert('Yes, my birthday is on the sixtenth of october!');
    console.log('User guessed correctly');
  }else{
    alert('No my birth is indeed in october.');
    console.log('User did not guess correctly');
  }
}
/////////////////////////////////////////////////////////////////////////\
var answerWork = prompt('Did I work at walmart as a cashier before coming to code fellows? (y/n)').toLowerCase();

work();
function work(){
  if(answerWork === 'yes' || answerWork === 'y'){
    alert('Yes I worked there for about nine months before coming to seattle');
    console.log('User guessed correctly');
  }else{
    alert('If only you were right about that!');
    console.log('User did not guess correctly');
  }
}
///////////////////////////////////////////////////////////////////////\
var answerSchool = prompt('Did I graduate highschool in may of 2019? (y/n)').toLowerCase();

school();
function school(){
  if(answerSchool === 'yes' || answerSchool === 'y'){
    alert('Yes, I did and I am so glad to be done with it!');
    console.log('User guessed correctly');
  }else{
    alert('I would be very sad if you were right.');
    console.log('User did not guess correctly');
  }
}
/////////////////////////////////////////////////////////////////////\
var answerMagic = prompt('Do I love the collectable trading card game Magic the Gathering? (y/n)').toLowerCase();

magic();
function magic(){
  if(answerMagic === 'yes' || answerMagic === 'y'){
    alert('Yes, its one of my favorite games, you try it!');console.log('User guessed correctly');
  }else{
    alert('That is indeed the wrong answer, ' + name + '.' + ' Magic is one of the best games ever made, you should try it.');
    console.log('User did not guess correctly.');
  }
}
///////////////////////////////////////////////////////////////////\
var numAnswer = parseInt(prompt('Guess a number'));

numGuess();
function numGuess(){
  for(var i=0; i<=4; i++){
    if(isNaN(numAnswer)){
      numAnswer = prompt('not a number, please enter a number');
    }else{
      if(numAnswer === 7 ){
        alert('Correct');
        break;
      }else if(numAnswer < 7){
        numAnswer = prompt('Too low, try again');
        i++;
        console.log(i);
      }else{
        numAnswer = prompt('Too high, try again');
        i++;
      }
    }
  }
  if(numAnswer !== 7){
    alert('The answer is seven');
  }
}
///////////////////////////////////////////////////////////////\
