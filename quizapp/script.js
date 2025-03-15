// Selecting elements from the DOM
const questionContainer = document.getElementById("question");
const optionContainer = document.getElementById("options_container");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Quiz Questions
const questions = [
    {
        question: "What is the capital of Nigeria?",
        answer: [
            { option: "Lagos", correct: false },
            { option: "Abuja", correct: true },
            { option: "Kano", correct: false },
            { option: "Ibadan", correct: false }
        ]
    },
    {
        question: "What is the capital of Ghana?",
        answer: [
            { option: "Accra", correct: true },
            { option: "Kumasi", correct: false },
            { option: "Tamale", correct: false },
            { option: "Ho", correct: false }
        ]
    },
    {
        question: "What is the capital of South Africa?",
        answer: [
            { option: "Cape Town", correct: false },
            { option: "Johannesburg", correct: false },
            { option: "Pretoria", correct: true },
            { option: "Durban", correct: false }
        ]
    },
    {
        question: "What is the capital of Kenya?",
        answer: [
            { option: "Nairobi", correct: true },
            { option: "Mombasa", correct: false },
            { option: "Kisumu", correct: false },
            { option: "Eldoret", correct: false }
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answer: [
            { option: "Cairo", correct: true },
            { option: "Alexandria", correct: false },
            { option: "Luxor", correct: false },
            { option: "Aswan", correct: false }
        ]
    }
];

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

// Display Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = question.question;
    optionContainer.innerHTML = ""; // Properly clear options

    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.option;
        button.addEventListener("click", () => selectAnswer(answer, button));
        optionContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

// Select Answer
function selectAnswer(answer, button) {
    if (answer.correct) {
        button.style.backgroundColor = "green";
        score++; // Increase score if correct
    } else {
        button.style.backgroundColor = "red";
    }

    // Disable all buttons after selecting an answer
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);

    nextButton.style.display = "block";
}

// Next Question
nextButton.addEventListener("click", nextQuestion);
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show Final Result
function showResult() {
    questionContainer.innerHTML = "Quiz Over!";
    optionContainer.innerHTML = "";
    nextButton.style.display = "none";

    const scoreText = document.createElement("p");
    scoreText.innerHTML = `Your score: ${score} out of ${questions.length}`;
    optionContainer.appendChild(scoreText);

    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", startQuiz);
    optionContainer.appendChild(restartButton);
}

// Start the quiz when the page loads
startQuiz();
