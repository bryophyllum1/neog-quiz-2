var readline= require('readline-sync');
const chalk = require('chalk');
var questions = [ {
  quest : "Who is the Prime Minister of India?",
  ans : "NARENDRA MODI",
}, {
  quest : "Who is the chief minister of Bihar?",
  ans : "NITISH KUMAR",
}, {
  quest : "What is the name of the capital of India?",
  ans : "DELHI",
}, {
  quest : "How many continents are there in the world?",
  ans : "7",
}, {
  quest : "How many colors in the rainbow?",
  ans : "7",
}, {
  quest : "How many states are there in India?",
  ans : "29",
}, {
  quest : "How many union territoriesn are there in India?",
  ans : "7",
}, {
  quest : "What is the capital of Bihar?",
  ans : "PATNA",
}]
var highscore={
  name: "Aakash",
  score:0,
}
var readline= require('readline-sync');

console.log(chalk.blue("Welcome to the game --- Do ya have general knowlege?------"));
console.log("My name is "+ chalk.red("Aakash")+" and this game is about India..");

console.log(chalk.green("So, the game is of 4 levels."));
console.log(chalk.green(" Each level contains two questions. And if you answer a question correctly, then it will increase your score by one."))
console.log(chalk.green(" If you answer atleast one correctly then only you can go to the next level."));
var name=readline.question(chalk.cyan("Enter your name: "));
console.log(chalk.bgGray("let's start, "+name+" ----------------"));

while(true){
var score=0;
var temp=score;
for(var i=0; i< 4; i++){
console.log("-------Level "+ (i+1) + "-------")
  for(var j=0; j<2; j++){
    answer=readline.question(questions[i*2+j].quest)
    if(answer.toUpperCase()===questions[i*2+j].ans){
      console.log(chalk.bold.green("Right!"));
      score++;
      console.log("your current score is: "+ score);
    }
    else{
      console.log(chalk.bold.red("Wrong!"));
      console.log("This is the right answer: "+ questions[i*2 +j].ans);
            console.log("your current score is: "+ score);

    }
  }
  if (temp===score){
    console.log("You lost, wanna try again...")
    break;
  }else{
    temp=score
  }
}
console.log("You completed the game with score: "+ score);
if (score>highscore.score){
  console.log("You created new high score!");
  highscore.name= name;
  highscore.score= score;
}else{
  console.log("Current highscore was achieved by :"+ highscore.name+ " and is :" + highscore.score);
}
var choice = readline.question("Enter 1 if you want to play again or enter 2 to exit the game: ");
if (choice==='2'){
  console.log("Exiting game....")
break;
}
}
