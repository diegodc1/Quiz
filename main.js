let questionsList = [
  {
    id: 1,
    question: 'Que parte de Birmingham os Peaky Blinders chamam de lar?',
    alternatives: ['Small Heath', 'Edgbaston', 'Kingstanding', 'Kingscroll'],
    correctAnswer: 'Edgbaston'
  },
  {
    id: 2,
    question: 'O inspetor Campbell foi trazido de ...',
    alternatives: ['Belfast', 'Londres', 'Dublin', 'Paris'],
    correctAnswer: 'Dublin'
  },
  {
    id: 3,
    question: 'Como se chama o filho de Tommy?',
    alternatives: ['Charles', 'Lucas', 'Josh', 'John'],
    correctAnswer: 'John'
  }
]

const c = el => document.querySelector(el)

questionsList.map(question => {
  var questionItem = c('.question').cloneNode(true)

  // questionItem.setAttribute('data-key', index)

  questionItem.querySelector('#question--title').innerHTML = question.question
  questionItem.querySelector('.option-1').innerHTML = question.alternatives[1]
  questionItem.querySelector('.option-2').innerHTML = question.alternatives[0]
  questionItem.querySelector('.option-3').innerHTML = question.alternatives[2]
  questionItem.querySelector('.option-4').innerHTML = question.alternatives[3]

  let option1 = questionItem.querySelector('.option-1').textContent
  let option2 = questionItem.querySelector('.option-2').textContent
  let option3 = questionItem.querySelector('.option-3').textContent
  let option4 = questionItem.querySelector('.option-4').textContent

  let answer = question.correctAnswer

  checkAnswer(questionItem, option1, option2, option3, option4)

  // console.log(question.correctAnswer)

  c('.questions').append(questionItem)
})

function checkAnswer(answer, questionItem, option1, option2, option3, option4) {
  var questionItem = c('.question')

  if (answer == option1) {
    questionItem.querySelector('.option-1').classList.add('correct')
  } else if (answer == option2) {
    questionItem.querySelector('.option-2').classList.add('correct')
  } else if (answer == option3) {
    questionItem.querySelector('.option-3').classList.add('correct')
  } else if (answer == option4) {
    questionItem.querySelector('.option-4').classList.add('correct')
  }

  console.log(questionsList.correctAnswer)
}

function clearAnswer() {
  var questionItem = c('.question')
  questionItem.querySelector('.option-1').classList.remove('correct')
  questionItem.querySelector('.option-2').classList.remove('correct')
  questionItem.querySelector('.option-3').classList.remove('correct')
  questionItem.querySelector('.option-4').classList.remove('correct')
}

function addQuestionsToList(
  id,
  question,
  correct,
  wrong1,
  wrong2,
  wrong3,
  wrong4
) {
  questionsList.push({
    id,
    question: question,
    correct: correct,
    wrong1: wrong1,
    wrong2: wrong2,
    wrong3: wrong3,
    wrong4: wrong4
  })
}
