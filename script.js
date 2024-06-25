const questions = [
  {
    question: "What is a group of unicorns known as?",
    answers: [
      { text: "A herd ", correct: false },
      { text: "A crowd ", correct: false },
      { text: "A rainbow ", correct: false },
      { text: "A shimmer ", correct: true },
    ],
  },
  {
    question: "What is the fear of fun called?",
    answers: [
      { text: "Phobophobia", correct: false },
      { text: "Cherophobia ", correct: true },
      { text: "Hilarophobia ", correct: false },
      { text: "Funophobia ", correct: false },
    ],
  },

  {
    question: "Which country invented ice cream?",
    answers: [
      { text: "USA", correct: false },
      { text: "Italy ", correct: false },
      { text: "France ", correct: false },
      { text: "China ", correct: true },
    ],
  },

  {
    question: "Which animal sleeps the most?",
    answers: [
      { text: "Sloth", correct: false },
      { text: "Cat ", correct: false },
      { text: "Koala", correct: true },
      { text: "Bat", correct: false },
    ],
  },

  {
    question: "Which ancient people invented the toothbrush??",
    answers: [
      { text: "Romans", correct: false },
      { text: "Egyptians", correct: true },
      { text: "Greeks", correct: false },
      { text: "Africans", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored $ {score} out of ${questions.length}!`;

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
