const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(" enter your name ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // question = "who was the first American woman in space? ";
  // candidateAnswer = input.question(question);

  for (let i = 0; i < questions.length; i++) {
    let userResponse = input.question(questions[i])
    candidateAnswers.push(userResponse)
  }
}
function gradeQuiz(candidateAnswers) {
  console.log(candidateAnswer);
  //   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   for (let i = 0; i < questions.length; i++) {
  
//   if (candidateAnswers[i] === correctAnswers[i]) {
//     console.log("You are correct !");
//   } else {
//     console.log("Sorry your answer is incorrect.");
//   }
// }
for(let i = 0; i < questions.length; i++) {
  
  console.log(`${questions[i]}`)
  console.log(`userResponse ${candidateAnswers[i]}`);
  console.log(`correctresponse ${correctAnswers[i]}`);
}
  
  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
let numOfCorrectAnswer = 0;
for( i=0; i<correctAnswers.length; i++){
 if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
  // grade += 20;
  numOfCorrectAnswer++
 }
}
grade = numOfCorrectAnswer/questions.length *100;

if (grade >80) {
  console.log(`Congratulations! You have Passed the quiz with ${grade}%}`);
} 
else{
  console.log(`Sorry, You have failed the quiz. Better luck nex time.`);
}
console.log(grade);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};