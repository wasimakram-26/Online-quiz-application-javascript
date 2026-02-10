let questions = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C"],
        answer: 2
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Digital Ordinance Model",
            "Desktop Oriented Mode"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;

    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText =
            questions[currentQuestion].options[i];
    }

    document.getElementById("result").innerText = "";
    document.getElementById("timer").innerText = "Time Left: " + timeLeft;

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = "Time Left: " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        nextQuestion();
    }
}

function checkAnswer(selected) {
    clearInterval(timer);

    if (selected === questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".quiz-container").innerHTML =
        `<h2>Quiz Completed</h2>
         <p>Your Score: ${score} / ${questions.length}</p>`;
}

loadQuestion();
