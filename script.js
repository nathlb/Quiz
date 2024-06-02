
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
    10: "What is the longest river in the world?",
    11: "What is the largest continent?",
    12: "What is the currency of Japan?",
    13: "What is the largest mammal?",
    14: "Who invented the telephone?",
    15: "What is the capital of Italy?",
    16: "What is the chemical symbol for gold?",
    17: "What is the capital of Australia?",
    18: "What is the main ingredient in guacamole?",
    19: "What is the hardest natural substance on Earth?",
    20: "What is the speed of light?",
    21: "Who wrote 'Pride and Prejudice'?",
    22: "What is the tallest mountain in the world?",
    23: "What is the capital of Canada?",
    24: "What is the main ingredient in hummus?",
    25: "What is the currency of the United Kingdom?",
    26: "What is the capital of China?",
    27: "What is the atomic number of hydrogen?",
    28: "Who developed the theory of relativity?",
    29: "What is the chemical symbol for sodium?",
    30: "What is the capital of Germany?",
    31: "What is the main ingredient in bread?",
    32: "What is the capital of Brazil?",
    33: "What is the capital of Russia?",
    34: "What is the main ingredient in sushi?",
    35: "What is the square root of 81?",
    36: "Who wrote '1984'?",
    37: "What is the main ingredient in chocolate?",
    38: "What is the capital of India?",
    39: "What is the main ingredient in pasta?",
    40: "What is the atomic number of carbon?",
    41: "What is the capital of Mexico?",
    42: "What is the main ingredient in curry?",
    43: "What is the currency of the United States?",
    44: "What is the main ingredient in ice cream?",
    45: "What is the capital of Egypt?",
    46: "What is the main ingredient in pizza?",
    47: "What is the atomic number of oxygen?",
    48: "What is the main ingredient in wine?",
    49: "What is the capital of Argentina?",
    50: "What is the main ingredient in beer?",
    51: "What is the atomic number of helium?",
    52: "What is the main ingredient in bread pudding?",
    53: "What is the capital of South Korea?",
    54: "What is the main ingredient in lasagna?",
    55: "What is the atomic number of nitrogen?",
    56: "What is the main ingredient in pancakes?",
    57: "What is the capital of Spain?",
    58: "What is the main ingredient in cookies?",
    59: "What is the atomic number of aluminum?",
    60: "What is the main ingredient in cheese?",
    61: "What is the capital of Greece?",
    62: "What is the main ingredient in a salad?",
    63: "What is the atomic number of calcium?",
    64: "What is the main ingredient in a sandwich?",
    65: "What is the capital of Portugal?",
    66: "What is the main ingredient in soup?",
    67: "What is the atomic number of iron?",
    68: "What is the main ingredient in a stew?",
    69: "What is the capital of Turkey?",
    70: "What is the main ingredient in a smoothie?",
    71: "What is the atomic number of potassium?",
    72: "What is the main ingredient in a taco?",
    73: "What is the capital of Sweden?",
    74: "What is the main ingredient in a burrito?",
    75: "What is the atomic number of chlorine?",
    76: "What is the main ingredient in a crepe?",
    77: "What is the capital of Norway?",
    78: "What is the main ingredient in a quiche?",
    79: "What is the atomic number of phosphorus?",
    80: "What is the main ingredient in a hot dog?",
    81: "What is the capital of Denmark?",
    82: "What is the main ingredient in a hamburger?",
    83: "What is the atomic number of sulfur?",
    84: "What is the main ingredient in a milkshake?",
    85: "What is the capital of Finland?",
    86: "What is the main ingredient in a pie?",
    87: "What is the atomic number of magnesium?",
    88: "What is the main ingredient in a donut?",
    89: "What is the capital of Iceland?",
    90: "What is the main ingredient in a croissant?",
    91: "What is the atomic number of silicon?",
    92: "What is the main ingredient in a muffin?",
    93: "What is the capital of New Zealand?",
    94: "What is the main ingredient in a brownie?",
    95: "What is the atomic number of argon?",
    96: "What is the main ingredient in a scone?",
    97: "What is the capital of Ireland?",
    98: "What is the main ingredient in a cake?",
    99: "What is the atomic number of neon?"
};

const choices = {
    0: ["1", "2", "3", "5", "2"],
    1: ["Paris", "London", "Berlin", "Madrid", "Paris"],
    2: ["Earth", "Jupiter", "Mars", "Venus", "Jupiter"],
    3: ["H2O", "O2", "CO2", "H2O2", "H2O"],
    4: ["6", "7", "8", "9", "8"],
    5: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway", "Harper Lee"],
    6: ["Cheetah", "Lion", "Tiger", "Leopard", "Cheetah"],
    7: ["100°C", "0°C", "50°C", "200°C", "100°C"],
    8: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Pacific Ocean"],
    9: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
    10: ["Amazon", "Nile", "Yangtze", "Mississippi", "Nile"],
    11: ["Asia", "Africa", "Europe", "Australia", "Asia"],
    12: ["Yen", "Dollar", "Euro", "Pound", "Yen"],
    13: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus", "Blue Whale"],
    14: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi", "Alexander Graham Bell"],
    15: ["Rome", "Milan", "Naples", "Florence", "Rome"],
    16: ["Au", "Ag", "Pb", "Hg", "Au"],
    17: ["Sydney", "Melbourne", "Brisbane", "Canberra", "Canberra"],
    18: ["Avocado", "Tomato", "Lettuce", "Cucumber", "Avocado"],
    19: ["Diamond", "Gold", "Iron", "Platinum", "Diamond"],
    20: ["299,792,458 m/s", "150,000,000 m/s", "1,080,000,000 m/s", "300,000,000 m/s", "299,792,458 m/s"],
    21: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley", "Jane Austen"],
    22: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    23: ["Ottawa", "Toronto", "Vancouver", "Montreal", "Ottawa"],
    24: ["Chickpeas", "Lentils", "Beans", "Peas", "Chickpeas"],
    25: ["Pound", "Euro", "Dollar", "Franc", "Pound"],
    26: ["Shanghai", "Guangzhou", "Hong Kong", "Beijing", "Beijing"],
    27: ["4", "2", "3", "1", "1"],
    28: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr", "Albert Einstein"],
    29: ["O", "S", "Na", "N", "Na"],
    30: ["Frankfurt", "Hamburg", "Berlin", "Munich", "Berlin"],
    31: ["Salt", "Yeast", "Flour", "Sugar", "Flour"],
    32: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador", "Brasília"],
    33: ["Saint Petersburg", "Kazan", "Moscow", "Novosibirsk", "Moscow"],
    34: ["Seaweed", "Fish", "Rice", "Soy Sauce", "Rice"],
    35: ["10", "7", "9", "8", "9"],
    36: ["Ray Bradbury", "George Orwell", "Philip K. Dick", "Aldous Huxley", "George Orwell"],
    37: ["Butter", "Milk", "Sugar", "Cocoa", "Cocoa"],
    38: ["Mumbai", "New Delhi", "Kolkata", "Chennai", "New Delhi"],
    39: ["Barley", "Corn", "Rice", "Wheat", "Wheat"],
    40: ["6", "8", "12", "14", "6"],
    41: ["Tijuana", "Monterrey", "Mexico City", "Guadalajara", "Mexico City"],
    42: ["Vegetables", "Rice", "Meat", "Spices", "Spices"],
    43: ["Pound", "Peso", "Dollar", "Euro", "Dollar"],
    44: ["Sugar", "Eggs", "Milk", "Cream", "Cream"],
    45: ["Giza", "Cairo", "Alexandria", "Luxor", "Cairo"],
    46: ["Tomato Sauce", "Dough", "Cheese", "Pepperoni", "Dough"],
    47: ["12", "16", "10", "8", "8"],
    48: ["Plums", "Pears", "Grapes", "Apples", "Grapes"],
    49: ["Rosario", "Córdoba", "Mendoza", "Buenos Aires", "Buenos Aires"],
    50: ["Wheat", "Rice", "Corn", "Barley", "Barley"],
    51: ["4", "6", "8", "2", "2"],
    52: ["Eggs", "Milk", "Butter", "Bread", "Bread"],
    53: ["Incheon", "Busan", "Seoul", "Daegu", "Seoul"],
    54: ["Cheese", "Tomato Sauce", "Pasta", "Meat", "Pasta"],
    55: ["9", "14", "7", "3", "7"],
    56: ["Butter", "Flour", "Eggs", "Milk", "Flour"],
    57: ["Seville", "Valencia", "Barcelona", "Madrid", "Madrid"],
    58: ["Butter", "Eggs", "Sugar", "Flour", "Flour"],
    59: ["39", "12", "26", "13", "13"],
    60: ["Salt", "Cream", "Milk", "Butter", "Milk"],
    61: ["Patras", "Thessaloniki", "Heraklion", "Athens", "Athens"],
    62: ["Cucumber", "Lettuce", "Tomato", "Carrot", "Lettuce"],
    63: ["80", "60", "40", "20", "20"],
    64: ["Cheese", "Lettuce", "Bread", "Meat", "Bread"],
    65: ["Braga", "Porto", "Coimbra", "Lisbon", "Lisbon"],
    66: ["Vegetables", "Meat", "Water", "Broth", "Water"],
    67: ["25", "26", "28", "27", "26"],
    68: ["Carrot", "Meat", "Potato", "Celery", "Meat"],
    69: ["Izmir", "Istanbul", "Bursa", "Ankara", "Ankara"],
    70: ["Ice", "Milk", "Sugar", "Fruit", "Fruit"],
    71: ["20", "19", "40", "39", "19"],
    72: ["Lettuce", "Beef", "Cheese", "Tortilla", "Tortilla"],
    73: ["Malmö", "Gothenburg", "Uppsala", "Stockholm", "Stockholm"],
    74: ["Chicken", "Rice", "Beans", "Tortilla", "Tortilla"],
    75: ["18", "17", "19", "16", "17"],
    76: ["Sugar", "Eggs", "Flour", "Milk", "Flour"],
    77: ["Bergen", "Oslo", "Stavanger", "Trondheim", "Oslo"],
    78: ["Ham", "Cheese", "Cream", "Eggs", "Eggs"],
    79: ["17", "14", "15", "16", "15"],
    80: ["Ketchup", "Mustard", "Bun", "Sausage", "Sausage"],
    81: ["Aarhus", "Odense", "Copenhagen", "Aalborg", "Copenhagen"],
    82: ["Bun", "Lettuce", "Tomato", "Beef", "Beef"],
    83: ["19", "18", "17", "16", "16"],
    84: ["Chocolate", "Ice Cream", "Sugar", "Milk", "Milk"],
    85: ["Tampere", "Helsinki", "Vantaa", "Espoo", "Helsinki"],
    86: ["Sugar", "Butter", "Fruit", "Flour", "Flour"],
    87: ["14", "13", "12", "11", "12"],
    88: ["Sugar", "Milk", "Butter", "Flour", "Flour"],
    89: ["Akureyri", "Reykjavik", "Hafnarfjörður", "Keflavik", "Reykjavik"],
    90: ["Butter", "Eggs", "Milk", "Flour", "Flour"],
    91: ["13", "15", "12", "14", "14"],
    92: ["Butter", "Eggs", "Flour", "Sugar", "Flour"],
    93: ["Hamilton", "Wellington", "Auckland", "Christchurch", "Wellington"],
    94: ["Sugar", "Butter", "Flour", "Chocolate", "Chocolate"],
    95: ["18", "19", "20", "17", "18"],
    96: ["Sugar", "Butter", "Flour", "Milk", "Flour"],
    97: ["Cork", "Limerick", "Galway", "Dublin", "Dublin"],
    98: ["Butter", "Eggs", "Sugar", "Flour", "Flour"],
    99: ["11", "10", "12", "9", "10"]
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
    questionID = Math.floor(Math.random() * 100)
    while(currentQuestionID == questionID)
        questionID = Math.floor(Math.random() * 100)
    currentQuestionID = questionID
    question = questions[questionID]
    answers = choices[questionID]

    document.getElementById("question").textContent = question
    document.getElementById("answerA").textContent = "A - " + answers[0]
    document.getElementById("answerB").textContent = "B - " + answers[1]
    document.getElementById("answerC").textContent = "C - " + answers[2]
    document.getElementById("answerD").textContent = "D - " + answers[3]
    goodAnwser = answers[4]
    

}
function checkAnswer(chosenAnswer)
{
    let a = document.getElementById(chosenAnswer).textContent
    a = a.slice(4)
    if(a == goodAnwser)
    {
        score++
        title.textContent = `Score : ${score}`
    }
    addQuestions()
    
}