
let score = 0
let goodAnwser = 0
let currentQuestionID

const questions = {
    0: "What is the smallest prime number?",
    1: "What is the capital of France?",
    2: "What is the largest planet in our solar system?",
    3: "What is the chemical symbol for water?",
    4: "What is the square root of 64?",
    5: "Who wrote 'To Kill a Mockingbird'?",
    6: "What is the fastest land animal?",
    7: "What is the boiling point of water?",
    8: "What is the largest ocean on Earth?",
    9: "Who painted the Mona Lisa?",
    
};

const choices = {
    0: ["1", "2", "3", "5", "2"],
    1: ["Paris", "London", "Berlin", "Madrid", "Paris"],
    2: ["Earth", "Jupiter", "Mars", "Venus", "Jupiter"],
    3: ["H2O", "O2", "CO2", "H2O2", "H20"],
    4: ["6", "7", "8", "9", "8"],
    5: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway", "Harper Lee"],
    6: ["Cheetah", "Lion", "Tiger", "Leopard", "Cheetah"],
    7: ["100°C", "0°C", "50°C", "200°C", "100°C"],
    8: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Pacific"],
    9: [ "Pablo Picasso","Leonardo da Vinci", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
};

function startGame()
{
    let startButton = document.getElementById("buttonStart")
    let answerButtons = document.getElementById("AnswerButtons")
    let questions = document.getElementById("questions")
    let title = document.getElementById("title")

    startButton.style.display = "none"
    answerButtons.style.display = "grid"
    questions.style.display = "inline"
    title.textContent = `Score : ${score}`
    title.style.fontSize = "40px"

    addQuestions()

}



function addQuestions()
{
    questionID = Math.floor(Math.random() * 10)
    while(currentQuestionID == questionID)
        questionID = Math.floor(Math.random() * 10)
    currentQuestionID = questionID
    question = questions[questionID]
    answers = choices[questionID]

    document.getElementById("question").textContent = question
    document.getElementById("answerA").textContent = answers[0]
    document.getElementById("answerB").textContent = answers[1]
    document.getElementById("answerC").textContent = answers[2]
    document.getElementById("answerD").textContent = answers[3]
    goodAnwser = answers[4]

}
function checkAnswer(chosenAnswer)
{
    if(document.getElementById(chosenAnswer).textContent == goodAnwser)
    {
        score++
        title.textContent = `Score : ${score}`
    }
    addQuestions()
    
}