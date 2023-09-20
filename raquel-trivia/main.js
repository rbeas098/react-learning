var prompt = require('prompt-sync')();

function handleAnswer(response, realAnswer) {
  if (response == realAnswer) {
    console.log(`correct!`);
    return 1 
  }
  else { 
    console.log(`good try`);
    return 0
  }
}

function askQuestionAndScore(question, realAnswer) {
  var ans = prompt(question)
  var points = handleAnswer(ans, realAnswer)
  return points
}

function startQuiz() {
  var score = 0

  score += askQuestionAndScore("1. what is my favoriate color?", "red")
  score += askQuestionAndScore("2. what is my favoriate anime?", "moriarty the patriot")
  score += askQuestionAndScore("3. how old am I?", 15)
  score += askQuestionAndScore("4. when is my birthday?", "june 4")
  score += askQuestionAndScore("5. what is the name of my charcter in the fall play?", "mauder")
  score += askQuestionAndScore("6. am I a potato?", "yes")
  
  return score
}

function main() {
  console.log("Welcome to Raquel trivia!!!")
  var score = startQuiz()
  console.log(" Thank you for participating you got " + score + " points")
}

main()
