const quizData = [
    {
        question: "What is the capital of India?",
        a: "Kolkata",
        b: "New Delhi",
        c: "Chennai",
        correct: "b",
    }
];

const introContainer = document.getElementById("intro")
const quiz= document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElements = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById("start-btn")
const answer = document.getElementsByClassName("answer")
const alertBox = document.getElementById("alert-box")
const quizForm = document.getElementById('quiz-form')
const surebtn = document.getElementById('sure')
const notSureBtn = document.getElementById("not-sure")
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionElements.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerElements.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

const alertBoxPrompt = () =>{
    alertBox.style.display = "block";
}

surebtn.addEventListener("click", () =>{
    answerSubmit();
});

notSureBtn.addEventListener("click", () =>{
    quizForm.reset();
});

startBtn.addEventListener("click", () => {
    introContainer.style.display = "none";
    quiz.style.display = "block";
});

const answerSubmit = () => {
    const answer = getSelected();
    alertBox.style.display = "none";
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           if(score == quizData.length){
            quiz.innerHTML = `
            <h2>Congratulations!</h2>
            <p>You have Won this game</p>
            <button onclick="location.reload()">Reload</button>
            `
           }else{
            quiz.innerHTML = `
            <h2>Better Luck Next Time!!</h2>
                <p>You have Lost this game</p>
            <button onclick="location.reload()">Retry</button>
            `
           }
           
       }
    }
}