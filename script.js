
function generateQuestion(operation, difficulty) {
  const maxLimit = Math.pow(10, parseInt(difficulty)) - 1;
  const minLimit = Math.pow(10, parseInt(difficulty) - 1);

  let num1, num2;

  switch (operation) {
    case 'addition':
      num1 = Math.floor(Math.random() * maxLimit);
      num2 = Math.floor(Math.random() * maxLimit);
      operator='+'
      break;
    case 'subtraction':
      num1 = Math.floor(Math.random() * maxLimit);
      num2 = Math.floor(Math.random() * (num1 - minLimit)) + minLimit;
      operator='-'
      break;
    case 'multiplication':
      num1 = Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
      num2 = Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
      operator='*'
      break;
    case 'division':
      num2 = Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
      num1 = num2 * Math.floor(Math.random() * (maxLimit / num2 - minLimit / num2 + 1)) + minLimit;
      break;
    default:
      num1 = 90;
      num2 = 10;
  }
//console.log(operation)
  const question = `${num1} ${operation === 'division' ? '÷' :operator} ${num2}`;
  document.getElementById('question').innerText = question;
  localStorage.setItem('answer', JSON.stringify(eval(question)));
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  console.log(JSON.stringify(localStorage.getItem('answer')))
  const correctAnswer = parseInt(localStorage.getItem('answer'));

  if (!isNaN(userAnswer)) {
    document.getElementById('result').innerText = userAnswer === correctAnswer ? 'Correct!' : 'Incorrect. Try again!';
  } else {
    document.getElementById('result').innerText = 'Please enter a valid number!';
  }

  document.getElementById('userAnswer').value = '';
  generateQuestion(
    document.getElementById('operation').value,
    document.getElementById('difficulty').value
  );
}

  generateQuestion('addition', 1);



/*
function generateQuestion(operation, difficulty) {
  let num1, num2, question;

  const maxLimit = Math.pow(10, parseInt(difficulty));
console.log(num1,num2,maxLimit)
  switch (operation) {
    case 'addition':
      num1 = Math.floor(Math.random() * maxLimit);
      num2 = Math.floor(Math.random() * maxLimit);
      question = `${num1} + ${num2}`;
      break;
    case 'subtraction':
      num1 = Math.floor(Math.random() * maxLimit);
      num2 = Math.floor(Math.random() * num1); // Ensure result is positive
      question = `${num1} - ${num2}`;
      break;
    case 'multiplication':
      num1 = Math.floor(Math.random() * Math.sqrt(maxLimit)); // Limit for simplicity
      num2 = Math.floor(Math.random() * Math.sqrt(maxLimit));
      question = `${num1} * ${num2}`;
      break;
    case 'division':
      num1 = num2 * Math.floor(Math.random() * Math.sqrt(maxLimit));
      question = `${num1} / ${num2}`;
      break;
    default:
      question = '';
  }

  document.getElementById('question').innerText = question;
  localStorage.setItem('answer', eval(question));
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  const correctAnswer = parseInt(localStorage.getItem('answer'));

  if (!isNaN(userAnswer)) {
    if (userAnswer === correctAnswer) {
      document.getElementById('result').innerText = 'Correct!';
    } else {
      document.getElementById('result').innerText = 'Incorrect. Try again!';
    }
  } else {
    document.getElementById('result').innerText = 'Please enter a valid number!';
  }

  document.getElementById('userAnswer').value = '';
  const selectedOperation = document.getElementById('operation').value;
  const selectedDifficulty = document.getElementById('difficulty').value;
  generateQuestion(selectedOperation, selectedDifficulty);
}

window.onload = function() {
  const selectedOperation = document.getElementById('operation').value;
  const selectedDifficulty = document.getElementById('difficulty').value;
  generateQuestion(selectedOperation, selectedDifficulty);
};
/*

This updated code now includes a new dropdown for selecting the difficulty level (number of digits) of the operands for math questions. Based on the selected operation and difficulty level, the code generates questions with operands up to the specified number of digits. Users can choose both the operation and the difficulty level for generating math questions.


/*
function generateQuestion(operation) {
  let num1, num2, question;

  switch (operation) {
    case 'addition':
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      question = `${num1} + ${num2}`;
      break;
    case 'subtraction':
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * num1); // Ensure result is positive
      question = `${num1} - ${num2}`;
      break;
    case 'multiplication':
      num1 = Math.floor(Math.random() * 20); // Limit for simplicity
      num2 = Math.floor(Math.random() * 20);
      question = `${num1} * ${num2}`;
      break;
    case 'division':
      num2 = Math.floor(Math.random() * 10) + 1; // Avoid division by zero
      num1 = num2 * Math.floor(Math.random() * 10);
      question = `${num1} / ${num2}`;
      break;
    default:
      question = '';
  }

  document.getElementById('question').innerText = question;
  localStorage.setItem('answer', eval(question));
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  const correctAnswer = parseInt(localStorage.getItem('answer'));

  if (!isNaN(userAnswer)) {
    if (userAnswer === correctAnswer) {
      document.getElementById('result').innerText = 'Correct!';
    } else {
      document.getElementById('result').innerText = 'Incorrect. Try again!';
    }
  } else {
    document.getElementById('result').innerText = 'Please enter a valid number!';
  }

  document.getElementById('userAnswer').value = '';
  const selectedOperation = document.getElementById('operation').value;
  generateQuestion(selectedOperation);
}

window.onload = function() {
  const selectedOperation = document.getElementById('operation').value;
  generateQuestion(selectedOperation);
};

/*
This updated JavaScript code modifies the `generateQuestion` function to handle different operations based on the user's selection from the dropdown menu. The `checkAnswer` function remains the same as before.

Now, when a user selects an operation from the dropdown menu, it will generate questions specifically for that operation. Upon page load, it generates the initial question based on the default selected operation.

/*
function generateQuestion() {
const operations = ['+', '-', '*', '/'];
const operation = operations[Math.floor(Math.random() * operations.length)];
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

if (operation === '/') {
while (num2 === 0 || num1 % num2 !== 0) {
num1 = Math.floor(Math.random() * 100);
num2 = Math.floor(Math.random() * 100);
}
}

const question = `${num1} ${operation} ${num2}`;
console.log(question)
document.getElementById('question').innerText = question;
localStorage.setItem('answer', eval(question));
}

function checkAnswer() {
const userAnswer = parseInt(document.getElementById('userAnswer').value);
const correctAnswer = parseInt(localStorage.getItem('answer'));

if (!isNaN(userAnswer)) {
if (userAnswer === correctAnswer) {
document.getElementById('result').innerText = 'Correct!';
} else {
document.getElementById('result').innerText = 'Incorrect. Try again!';
}
} else {
document.getElementById('result').innerText = 'Please enter a valid number!';
}

document.getElementById('userAnswer').value = '';
generateQuestion();
}
generateQuestion()
//window.onload = generateQuestion;
/*

This code generates math questions randomly (addition, subtraction, multiplication, and division) and checks the user's input against the correct answer, providing feedback. You can further customize the design and add more features based on your preferences.
*/