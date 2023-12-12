const passageElement = document.getElementById('passage');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');

const passages = [
  'The quick brown fox jumps over the lazy dog.',
  'A journey of a thousand miles begins with a single step.',
  'To be or not to be, that is the question.',
  'All that glitters is not gold.',
  'Sai is good boy but sai is doing too much masti',
  'In the beginning, God created the heavens and the earth.',
  'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.'
];

let currentPassageIndex = 0;
let startTime;

function startTyping() {
  startTime = new Date().getTime();
  passageElement.textContent = passages[currentPassageIndex];
  inputElement.value = '';
  inputElement.focus();
}

function checkSpeed() {
  const endTime = new Date().getTime();
  const elapsedTime = (endTime - startTime) / 1000; // in seconds
  const typedWords = inputElement.value.split(' ').filter(word => word !== '').length;
  const speed = Math.round(typedWords / elapsedTime * 60); // words per minute

  const correctWords = countCorrectWords(inputElement.value, passages[currentPassageIndex]);
  const accuracy = Math.round((correctWords / typedWords) * 100);

  resultElement.textContent = `Your typing speed: ${speed} words per minute. Accuracy: ${accuracy}%.`;

  currentPassageIndex++;
  if (currentPassageIndex < passages.length) {
    startTyping();
  } else {
    resultElement.textContent += ' You have completed all passages.';
  }
}

function countCorrectWords(typedText, passage) {
  const typedWords = typedText.split(' ').filter(word => word !== '');
  const correctWords = typedWords.filter(word => passage.includes(word));
  return correctWords.length;
}

// Initial setup
startTyping();

