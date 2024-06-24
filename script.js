const questions = [
  {
    questions: "What is a group of unicorns known as?",
    answers: [
      { text: "A herd ", correct: false },
      { text: "A crowd ", correct: false },
      { text: "A rainbow ", correct: false },
      { text: "A shimmer ", correct: true },
    ],
  },
  {
    questions: "What is the fear of fun called?",
    answers: [
      { text: "Phobophobia", correct: false },
      { text: "Cherophobia ", correct: true },
      { text: "Hilarophobia ", correct: false },
      { text: "Funophobia ", correct: false },
    ],
  },

  {
    questions: "Which country invented ice cream?",
    answers: [
      { text: "USA", correct: false },
      { text: "Italy ", correct: false },
      { text: "France ", correct: false },
      { text: "China ", correct: true },
    ],
  },

  {
    questions: "Which animal sleeps the most?",
    answers: [
      { text: "Sloth", correct: false },
      { text: "Cat ", correct: false },
      { text: "Koala", correct: true },
      { text: "Bat", correct: false },
    ],
  },

  {
    questions: "Which ancient people invented the toothbrush??",
    answers: [
      { text: "Romans", correct: false },
      { text: "Egyptians", correct: true },
      { text: "Greeks", correct: false },
      { text: "Africans", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = " Next";
  showQuestions();
}

function showQuestions() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.correctElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
