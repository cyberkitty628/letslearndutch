function displayQuiz(){
// Variable to store HTML quiz output
    const output= [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // Variable stores list of answers
            const answers = [];
            for(letter in currentQuestion.answers){
                // Adds HTML radio button to each answer
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // Adds question & answer to output and creates div element to hold them
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

// Variables to store existing HTML div containers
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// Variable to store questions & answers
const myQuestions = [
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
        question: "What is the Dutch word for 'dog'?",
        answers: {
            a: "Paard",
            b: "Haan",
            c: "Hond"
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
    }
]

// Displays quiz 
displayQuiz();

// Shows results when user clicks submit button
submitButton.addEventListener('click', showResults);