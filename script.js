
const database = {
    math: [
        { q: "10 + 15 = ?", options: ["20", "25", "30", "15"], ans: "25" },
        { q: "5 * 6 = ?", options: ["30", "11", "25", "56"], ans: "30" },
        { q: "Square root of 64?", options: ["6", "7", "8", "9"], ans: "8" },
        { q: "49 / 7 = ?", options: ["6", "7", "8", "9"], ans: "7" },
        { q: "100 - 45 = ?", options: ["55", "45", "65", "50"], ans: "55" },
        { q: "What is 11 * 11?", options: ["110", "121", "100", "111"], ans: "121" },
        { q: "What is the perimeter of a square with side 4?", options: ["4", "8", "12", "16"], ans: "16" },
        { q: "2.5 + 3.5 = ?", options: ["5.0", "6.0", "5.5", "6.5"], ans: "6.0" },
        { q: "What is 1/2 as a percentage?", options: ["25%", "50%", "75%", "10%"], ans: "50%" },
        { q: "What is the value of Pi (to two decimal places)?", options: ["3.10", "3.12", "3.14", "3.16"], ans: "3.14" },
        { q: "10 + (5 * 2) = ?", options: ["30", "20", "25", "17"], ans: "20" } // 11th question
    ],
    science: [
        { q: "Chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], ans: "H2O" },
        { q: "Center of the solar system?", options: ["Earth", "Mars", "Sun", "Moon"], ans: "Sun" },
        { q: "Hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], ans: "Diamond" },
        { q: "What force keeps us on the ground?", options: ["Magnetism", "Gravity", "Friction", "Tension"], ans: "Gravity" },
        { q: "Unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], ans: "Ohm" },
        { q: "What is the boiling point of water (in Celsius)?", options: ["0", "50", "100", "150"], ans: "100" },
        { q: "What is the closest star to Earth?", options: ["Alpha Centauri", "Polaris", "The Moon", "The Sun"], ans: "The Sun" },
        { q: "What color absorbs the most heat?", options: ["White", "Blue", "Black", "Red"], ans: "Black" },
        { q: "Metal that is liquid at room temp?", options: ["Iron", "Lead", "Mercury", "Tin"], ans: "Mercury" },
        { q: "What instrument measures wind speed?", options: ["Barometer", "Anemometer", "Thermometer", "Hygrometer"], ans: "Anemometer" },
        { q: "The Earth's atmosphere is mostly composed of which gas?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], ans: "Nitrogen" } // 11th question
    ],
    biology: [
        { q: "Powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Wall"], ans: "Mitochondria" },
        { q: "How many bones in an adult human?", options: ["206", "250", "300", "100"], ans: "206" },
        { q: "Which organ pumps blood?", options: ["Brain", "Heart", "Lungs", "Liver"], ans: "Heart" },
        { q: "The process plants use to make food?", options: ["Respiration", "Digestion", "Photosynthesis", "Germination"], ans: "Photosynthesis" },
        { q: "Largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], ans: "Skin" },
        { q: "What pigment makes plants green?", options: ["Carotene", "Melanin", "Chlorophyll", "Hemoglobin"], ans: "Chlorophyll" },
        { q: "Blood type considered the universal recipient?", options: ["A", "B", "O", "AB"], ans: "AB" },
        { q: "Which component of blood is responsible for clotting?", options: ["Red Cells", "Plasma", "White Cells", "Platelets"], ans: "Platelets" },
        { q: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], ans: "Cerebellum" },
        { q: "What is the study of fungi called?", options: ["Zoology", "Mycology", "Botany", "Ecology"], ans: "Mycology" },
        { q: "What is the main function of the respiratory system?", options: ["Moving blood", "Exchanging gases", "Processing food", "Sensing touch"], ans: "Exchanging gases" } // 11th question
    ],
    tech: [
        { q: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup", "Hyperlinks Text Mark", "High Technology Machine"], ans: "HyperText Markup Language" },
        { q: "Brain of the computer?", options: ["RAM", "CPU", "Mouse", "Monitor"], ans: "CPU" },
        { q: "What company developed the JavaScript language?", options: ["Microsoft", "Google", "Netscape", "Apple"], ans: "Netscape" },
        { q: "What is CSS primarily used for?", options: ["Styling web pages", "Creating interactive elements", "Managing data", "Sending emails"], ans: "Styling web pages" },
        { q: "A 'bug' in programming refers to:", options: ["A feature", "An error", "A type of virus", "A hardware part"], ans: "An error" },
        { q: "What does 'LAN' stand for?", options: ["Local Area Network", "Large Access Node", "Light Access Network", "Limited Area Network"], ans: "Local Area Network" },
        { q: "Which protocol is used to retrieve email from a mail server?", options: ["SMTP", "FTP", "POP3", "HTTP"], ans: "POP3" },
        { q: "What is the hexadecimal equivalent of 10 in decimal?", options: ["A", "B", "F", "10"], ans: "A" },
        { q: "Which storage device uses flash memory?", options: ["Hard Disk Drive", "DVD-ROM", "USB Drive", "Floppy Disk"], ans: "USB Drive" },
        { q: "The term 'pixel' is short for what?", options: ["Picture Element", "Program Interface", "Photo Layer", "Process Input"], ans: "Picture Element" },
        { q: "What is the primary function of an operating system?", options: ["Managing hardware and software resources", "Connecting to the internet", "Creating documents", "Playing music"], ans: "Managing hardware and software resources" } // 11th question
    ],
    history: [
        { q: "Who built the pyramids?", options: ["Romans", "Egyptians", "Greeks", "Mayans"], ans: "Egyptians" },
        { q: "Year WWII ended?", options: ["1945", "1939", "1918", "1950"], ans: "1945" },
        { q: "First person to orbit the Earth?", options: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"], ans: "Yuri Gagarin" },
        { q: "The Magna Carta was signed in which year?", options: ["1066", "1215", "1492", "1776"], ans: "1215" },
        { q: "Where did the Renaissance begin?", options: ["France", "England", "Italy", "Germany"], ans: "Italy" },
        { q: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], ans: "George Washington" },
        { q: "What civilization invented paper?", options: ["Roman", "Indian", "Chinese", "Greek"], ans: "Chinese" },
        { q: "What was the war fought between the North and South regions of the US?", options: ["Revolutionary War", "Civil War", "Mexican-American War", "War of 1812"], ans: "Civil War" },
        { q: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], ans: "1912" },
        { q: "Who wrote 'The Communist Manifesto'?", options: ["Lenin", "Stalin", "Karl Marx", "Mao"], ans: "Karl Marx" },
        { q: "The Ottoman Empire collapsed after which major conflict?", options: ["WWI", "WWII", "Crimean War", "Cold War"], ans: "WWI" } // 11th question
    ]
};

// --- 2. VARIABLES ---
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
const MAX_QUIZ_LENGTH = 10; // We will use a maximum of 10 questions per quiz

// --- 3. DOM ELEMENTS ---
const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const topicTitle = document.getElementById("quiz-topic-title");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options-box");
const finalScoreText = document.getElementById("final-score");

const qCounter = document.createElement('p');
qCounter.id = 'q-counter';
qCounter.style.cssText = "margin-left: 0; font-size: 1.2em; color: aqua; margin-bottom: 20px;";


// ---  HELPER FUNCTION: Shuffle Array (Fisher-Yates) ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// ---  CORE FUNCTIONS ---

// Start a specific topic
function startQuiz(topic) {
    // 1. Shuffle and select questions randomly
    let allQuestions = database[topic];
    let shuffledQuestions = shuffleArray([...allQuestions]); // Use spread operator to clone the array before shuffling
    
    // 2. Select the top MAX_QUIZ_LENGTH questions
    currentQuestions = shuffledQuestions.slice(0, MAX_QUIZ_LENGTH); 

    currentIndex = 0;
    score = 0;
    
    topicTitle.innerText = topic.toUpperCase();
    
    // Show Quiz, Hide Home
    homePage.classList.add("hide");
    quizPage.classList.remove("hide");
    
    // Append the counter element if it's not already there (prevents duplicates)
    if (!document.getElementById('q-counter-placeholder')) {
        quizPage.prepend(qCounter);
        // Using prepend to put it above the question text
    }

    loadQuestion();
}

// Start Random Quiz
function startRandomQuiz() {
    const topics = Object.keys(database);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    startQuiz(randomTopic);
}

// Load the current question and update the counter
function loadQuestion() {
    optionsBox.innerHTML = "";
    
    let currentQ = currentQuestions[currentIndex];
    questionText.innerText = currentQ.q;
    
    // Display the current question counter
    qCounter.innerText = `Question ${currentIndex + 1} / ${currentQuestions.length}`;

    // Create buttons dynamically (also shuffle options for extra randomization)
    let shuffledOptions = shuffleArray([...currentQ.options]);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(opt, currentQ.ans);
        optionsBox.appendChild(btn);
    });
}

// Check Answer
function checkAnswer(userChoice, correctAns) {
    if (userChoice === correctAns) {
        score++;
    }
    
    currentIndex++;
    
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show Results
function showResult() {
    quizPage.classList.add("hide");
    resultPage.classList.remove("hide");
    
    finalScoreText.innerText = `You scored: ${score} / ${currentQuestions.length}`;
}

// Return Home
function goHome() {
    resultPage.classList.add("hide");
    homePage.classList.remove("hide");
}