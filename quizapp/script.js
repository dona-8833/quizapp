// selecting elements from the DOM

const questionContainer = document.getElementById("question");
const optionContainer = document.getElementById("option_container");
const nextButton = document.getElementById("next-btn");
const answerBtn = document.querySelectorAll(".btn")

// creating questions

const questions = [
    {
        question: "What is the capital of Nigeria?",
        answer:[
            {option: "Lagos", correct: false},
            {option: "Abuja", correct: true},
            {option: "Kano", correct: false},
            {option: "Ibadan", correct: false}
        ]
    },{
        question: "What is the capital of Ghana?",
        answer:[
            {option: "Accra", correct: true},
            {option: "Kumasi", correct: false},
            {option: "Tamale", correct: false},
            {option: "Ho", correct: false}
        ]
    },{
        question: "What is the capital of South Africa?",
        answer:[
            {option: "Cape Town", correct: false},
            {option: "Johannesburg", correct: false},
            {option: "Pretoria", correct: true},
            {option: "Durban", correct: false}
        ]
    },{
        question: "What is the capital of Kenya?",
        answer:[
            {option: "Nairobi", correct: true},
            {option: "Mombasa", correct: false},
            {option: "Kisumu", correct: false},
            {option: "Eldoret", correct: false}
        ]
    },{
        question: "What is the capital of Egypt?",
        answer:[
            {option: "Cairo", correct: true},
            {option: "Alexandria", correct: false},
            {option: "Luxor", correct: false},
            {option: "Aswan", correct: false}
        ]
    }
]

// creating functions
let currentQuestionIndex = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    showQuestion();
    nextButton.style.display = "none";
}
function showQuestion(){
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = question.question;
    optionContainer.innerHTML = "";
    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.option;
        button.addEventListener("click", () => selectAnswer(answer));
        optionContainer.appendChild(button);
    })

    nextButton.style.display = "none";
    
}
function selectAnswer(){}
function nextQuestion(){}