// Created function to display the quiz
function displayQuiz(){
// Variable to store HTML quiz output
    const output= [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // Variable stores list of answers
            const answers = [];
            for(letter in currentQuestion.answers){
                // Adds HTML radio button to each answer
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // Adds question & answer to output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    // Puts all questions in HTML
    quizContainer.innerHTML = output.join('');
}

// This function will indicate whether the user got the question right or wrong by changing colors
function showResults(){
    // Variable to retrieve user answers and select questions & answers
    const answerContainers = quizContainer.querySelectorAll('.answers');

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // 'If' statement will turn question + answer green or red depending on correctness
    if (userAnswer === currentQuestion.correctAnswer) {
        answerContainers[questionNumber].style.color = 'green';
    }
        else {answerContainers[questionNumber].style.color = 'red';
    }
});
}

// Variables to store existing HTML div containers
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// Variable to store questions & answers
const quizQuestions = [
    {
        question: "In Dutch, what is the correct way to refer to someone who uses she/her pronouns?",
        answers: {
            a: "Zij, ze, haar",
            b: "Zij, ze, hem",
            c: "Hij, ze, haar"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these phrases would you use to greet a Dutch person in the afternoon?",
        answers: {
            a: "Goedenavond",
            b: "Goedemorgen",
            c: "Goedemiddag"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the Dutch phrase for 'see you later'?",
        answers: {
            a: "Zie jou tot!",
            b: "Ziens tot!",
            c: "Tot ziens!"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these word combinations correctly describe the four seasons (Winter, Spring, Summer, Fall) in Dutch?",
        answers: {
            a: "Winter, Lente, Sommer, Herfst",
            b: "Winter, Lente, Zomer, Herfst",
            c: "Winter, Lente, Zomer, Herbst"
        },
        correctAnswer: "b"
    },
    {
        question: "How would you word the phrase 'my name is (your name)' in Dutch?",
        answers: {
            a: "Mijn naam is (your name).",
            b: "Haar naam is (your name).",
            c: "Mij naam is (your name)."
        }
    }
]

// Displays quiz 
displayQuiz();

// Shows results when user clicks submit button
submitButton.addEventListener('click', showResults);