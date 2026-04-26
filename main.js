const words = [
  { korean: '안녕하세요', english: 'Hello', romanization: 'annyeonghaseyo' },
  { korean: '감사합니다', english: 'Thank you', romanization: 'gamsahamnida' },
  { korean: '네', english: 'Yes', romanization: 'ne' },
  { korean: '아니요', english: 'No', romanization: 'aniyo' },
  { korean: '물', english: 'Water', romanization: 'mul' },
  { korean: '밥', english: 'Rice / meal', romanization: 'bap' },
  { korean: '커피', english: 'Coffee', romanization: 'keopi' },
  { korean: '화장실', english: 'Bathroom', romanization: 'hwajangsil' },
  { korean: '학교', english: 'School', romanization: 'hakgyo' },
  { korean: '친구', english: 'Friend', romanization: 'chingu' },
  { korean: '사랑', english: 'Love', romanization: 'sarang' },
  { korean: '한국', english: 'Korea', romanization: 'hanguk' }
];

let currentIndex = 0;
let score = 0;
let streak = 0;
let mode = 'meaning';

const answerForm = document.querySelector('#answer-form');
const answerInput = document.querySelector('#answer-input');
const feedback = document.querySelector('#feedback');
const hint = document.querySelector('#hint');
const modeTabs = document.querySelectorAll('.mode-tab');
const progress = document.querySelector('#progress');
const prompt = document.querySelector('#prompt');
const promptLabel = document.querySelector('#prompt-label');
const restartButton = document.querySelector('#restart-button');
const scoreDisplay = document.querySelector('#score');
const skipButton = document.querySelector('#skip-button');
const streakDisplay = document.querySelector('#streak');
const wordList = document.querySelector('#word-list');

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, '');
}

function getCurrentWord() {
  return words[currentIndex];
}

function renderQuestion() {
  const word = getCurrentWord();
  const isMeaningMode = mode === 'meaning';

  prompt.textContent = isMeaningMode ? word.english : word.romanization;
  promptLabel.textContent = isMeaningMode ? 'Type this in Korean' : 'Type the Korean word for this romanization';
  hint.textContent = isMeaningMode ? `Hint: ${word.romanization}` : `Meaning: ${word.english}`;
  progress.textContent = `${currentIndex + 1} / ${words.length}`;
  streakDisplay.textContent = `${streak} streak`;
  scoreDisplay.textContent = score;
  answerInput.value = '';
  answerInput.focus();
}

function renderWordList() {
  wordList.innerHTML = words
    .map((word) => `<li><span>${word.korean}</span><span>${word.english}</span></li>`)
    .join('');
}

function setFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type || ''}`.trim();
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % words.length;
  renderQuestion();
}

answerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const word = getCurrentWord();
  const userAnswer = normalizeAnswer(answerInput.value);
  const correctAnswer = normalizeAnswer(word.korean);

  if (userAnswer === correctAnswer) {
    score += 10;
    streak += 1;
    setFeedback(`Correct: ${word.korean} means ${word.english}.`, 'correct');
    window.setTimeout(nextQuestion, 700);
    return;
  }

  streak = 0;
  score = Math.max(0, score - 2);
  streakDisplay.textContent = `${streak} streak`;
  scoreDisplay.textContent = score;
  setFeedback(`Try again. Answer: ${word.korean} (${word.romanization}).`, 'wrong');
  answerInput.select();
});

skipButton.addEventListener('click', () => {
  const word = getCurrentWord();
  streak = 0;
  setFeedback(`Skipped. ${word.english}: ${word.korean} (${word.romanization}).`, 'wrong');
  window.setTimeout(nextQuestion, 900);
});

restartButton.addEventListener('click', () => {
  currentIndex = 0;
  score = 0;
  streak = 0;
  setFeedback('Start with common greetings and travel words.');
  renderQuestion();
});

modeTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    mode = tab.dataset.mode;
    modeTabs.forEach((item) => item.classList.toggle('active', item === tab));
    setFeedback(mode === 'meaning' ? 'English prompts are active.' : 'Romanization prompts are active.');
    renderQuestion();
  });
});

renderWordList();
renderQuestion();
