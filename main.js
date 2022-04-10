//Initial data
let currentQuestion = 0;
let correctAnswers = 0;

// showQuestion()

//Events
document.querySelector('.restart-button').addEventListener('click', resetQuiz)

//Functions
function showQuestion() {
  if(questionsList[currentQuestion]) {
    let q = questionsList[currentQuestion]
    let porcent = Math.floor((currentQuestion / questionsList.length) * 100)

    document.querySelector(".question").style.display = "block"
    document.querySelector(".finish-quiz").style.display = "none"
    document.querySelector(".texto--title").style.display = "none"
    document.querySelector(".progress-bar").style.width = `${porcent}%`

    document.querySelector('.question--title').innerHTML = q.question

    let optionHTML = ''
    for(let i in q.alternatives) {
      optionHTML += `<span data-op="${i}" class="option"> ${q.alternatives[i]}</span>`
    }
  
    document.querySelector('.question--options').innerHTML = optionHTML

    document.querySelectorAll('.question--options .option').forEach(item => {
      item.addEventListener('click', optionClickEvent)
    })
  } else {
    finishQuiz()
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute('data-op'));

  if(questionsList[currentQuestion].answer === clickedOption) {
    correctAnswers++
   e.target.classList.add('correct')
  } else {
   e.target.classList.add('wrong')

  }

  setTimeout(currentQuestion++, 1200)

  setTimeout(showQuestion, 1300)
}

function finishQuiz() {
  let points = Math.floor((correctAnswers / questionsList.length) * 100);

  if(points < 30) {
    document.querySelector('.results--message').innerHTML = "Tente novamente!"
    document.querySelector('.results--porcent').style.color = "#FF0000"
  } else if (points >= 30 && points <= 50) {
    document.querySelector('.results--message').innerHTML = "Tente melhorar!"
    document.querySelector('.results--porcent').style.color = "#FFFF00"
  } else if (points >= 51 && points <= 80) {
    document.querySelector('.results--message').innerHTML = "Muito bem!"
    document.querySelector('.results--porcent').style.color = "#0D900D"
  } else if (points > 80) {
    document.querySelector('.results--message').innerHTML = "Muito bom! Parabéns!"
    document.querySelector('.results--porcent').style.color = "#0D630D"
  }

  document.querySelector('.results--porcent').innerHTML = `Você acertou ${points}%`
  document.querySelector('.results--correctAnwsers').innerHTML = `Você respondeu ${questionsList.length} perguntas e acertou  ${correctAnswers}`

  document.querySelector(".question").style.display = "none"
  document.querySelector(".finish-quiz").style.display = "block"
  document.querySelector(".progress-bar").style.width = "100%"

}

function resetQuiz() {
  currentQuestion = 0
  correctAnswers = 0 
  showQuestion()
}