const title = document.getElementById("question");
const option_container = document.getElementById("options_container");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of Nigeria?",
    answer: [
      { option: "Lagos", correct: false },
      { option: "Abuja", correct: true },
      { option: "Kano", correct: false },
      { option: "Ibadan", correct: false },
    ],
  },
  {
    question: "What is the capital of Ghana?",
    answer: [
      { option: "Accra", correct: true },
      { option: "Kumasi", correct: false },
      { option: "Tamale", correct: false },
      { option: "Ho", correct: false },
    ],
  },
  {
    question: "What is the capital of South Africa?",
    answer: [
      { option: "Cape Town", correct: false },
      { option: "Johannesburg", correct: false },
      { option: "Pretoria", correct: true },
      { option: "Durban", correct: false },
    ],
  },
  {
    question: "What is the capital of Kenya?",
    answer: [
      { option: "Nairobi", correct: true },
      { option: "Mombasa", correct: false },
      { option: "Kisumu", correct: false },
      { option: "Eldoret", correct: false },
    ],
  },
  {
    question: "What is the capital of Egypt?",
    answer: [
      { option: "Cairo", correct: true },
      { option: "Alexandria", correct: false },
      { option: "Luxor", correct: false },
      { option: "Aswan", correct: false },
    ],
  },
];
// initializing quiz

function startQuiz() {
  score = 0;
  currentIndex = 0;
  showQuestion();
  nextBtn.style.display = "none";
}

// display question

function showQuestion() {
  const question = questions[currentIndex];
  option_container.innerHTML = "";
  title.innerText = question.question;

  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.option;
    button.classList.add("btn");

    button.addEventListener("click", () => selctAnswer(answer, button));
    option_container.appendChild(button);
  });

  nextBtn.style.display = "none";
}

// select answer

function selctAnswer(answer, button) {
  if (answer.correct) {
    button.style.backgroundColor = "green";
    score++;
  } else {
    button.style.backgroundColor = "red";
  }

  document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true));

  nextBtn.style.display = "block";
}

// next question
nextBtn.addEventListener("click", nextQuestion);
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// showresult

function showResult() {
  option_container.innerHTML = "";
  title.innerText = "quiz end!";
  let toatlScore = document.createElement("p");
  toatlScore.innerHTML = `you scored ${score} of ${questions.length}`;
  option_container.appendChild(toatlScore);

  nextBtn.style.display = "none";

  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.classList.add("btn");
  restartButton.addEventListener("click", startQuiz);
  option_container.appendChild(restartButton);
}

startQuiz();
