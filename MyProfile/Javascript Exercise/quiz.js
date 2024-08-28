const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
    correctAnswer: 'Jupiter'
  }
];

const quizContainer = document.getElementById('quiz');

function buildQuiz() {
  const output = [];
  for (let i = 0; i < quizData.length; i++) {
    const question = quizData[i];
    const options = [];
    for (let j = 0; j < question.options.length; j++) {
      options.push(`
        <label>
          <input type="radio" name="question-${i}" value="${question.options[j]}">
          ${question.options[j]}
        </label>
      `);
    }
    output.push(`
      <div class="question">
        <h3>${question.question}</h3>
        <div class="options">${options.join('')}</div>
      </div>
    `);
  }
  quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
  const userAnswers = [];
  for (let i = 0; i < quizData.length; i++) {
    const question = quizData[i];
    const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
    } else {
      userAnswers.push(null);
    }
  }
  showResults(userAnswers);
}

function showResults(userAnswers) {
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].correctAnswer) {
      score++;
    }
  }
  const result = `You scored ${score} out of ${quizData.length}.`;
  quizContainer.innerHTML = `<h2>Quiz Results</h2><p>${result}</p>`;
}

buildQuiz();