const topicSets = {
  basics: {
    label: 'Basics',
    description: 'Common starter words for everyday Korean.',
    words: [
      { korean: '안녕하세요', english: 'Hello', romanization: 'annyeonghaseyo' },
      { korean: '감사합니다', english: 'Thank you', romanization: 'gamsahamnida' },
      { korean: '네', english: 'Yes', romanization: 'ne' },
      { korean: '아니요', english: 'No', romanization: 'aniyo' },
      { korean: '물', english: 'Water', romanization: 'mul' },
      { korean: '밥', english: 'Rice / meal', romanization: 'bap' },
      { korean: '화장실', english: 'Bathroom', romanization: 'hwajangsil' },
      { korean: '한국', english: 'Korea', romanization: 'hanguk' }
    ]
  },
  fruits: {
    label: 'Fruits',
    description: 'Fruit names for markets, cafes, and daily meals.',
    words: [
      { korean: '사과', english: 'Apple', romanization: 'sagwa' },
      { korean: '바나나', english: 'Banana', romanization: 'banana' },
      { korean: '딸기', english: 'Strawberry', romanization: 'ttalgi' },
      { korean: '포도', english: 'Grapes', romanization: 'podo' },
      { korean: '수박', english: 'Watermelon', romanization: 'subak' },
      { korean: '복숭아', english: 'Peach', romanization: 'boksunga' },
      { korean: '오렌지', english: 'Orange', romanization: 'orenji' },
      { korean: '배', english: 'Pear', romanization: 'bae' }
    ]
  },
  exercise: {
    label: 'Exercise',
    description: 'Useful words for workouts, sports, and movement.',
    words: [
      { korean: '운동', english: 'Exercise', romanization: 'undong' },
      { korean: '달리기', english: 'Running', romanization: 'dalligi' },
      { korean: '걷기', english: 'Walking', romanization: 'geotgi' },
      { korean: '수영', english: 'Swimming', romanization: 'suyeong' },
      { korean: '축구', english: 'Soccer', romanization: 'chukgu' },
      { korean: '농구', english: 'Basketball', romanization: 'nonggu' },
      { korean: '요가', english: 'Yoga', romanization: 'yoga' },
      { korean: '헬스장', english: 'Gym', romanization: 'helseujang' }
    ]
  },
  family: {
    label: 'Family',
    description: 'Family words for introductions and conversations.',
    words: [
      { korean: '가족', english: 'Family', romanization: 'gajok' },
      { korean: '어머니', english: 'Mother', romanization: 'eomeoni' },
      { korean: '아버지', english: 'Father', romanization: 'abeoji' },
      { korean: '부모님', english: 'Parents', romanization: 'bumonim' },
      { korean: '형', english: 'Older brother', romanization: 'hyeong' },
      { korean: '누나', english: 'Older sister', romanization: 'nuna' },
      { korean: '동생', english: 'Younger sibling', romanization: 'dongsaeng' },
      { korean: '친구', english: 'Friend', romanization: 'chingu' }
    ]
  }
};

let activeTopic = 'basics';
let currentIndex = 0;
let score = 0;
let streak = 0;
let mode = 'meaning';

const answerForm = document.querySelector('#answer-form');
const answerInput = document.querySelector('#answer-input');
const feedback = document.querySelector('#feedback');
const hint = document.querySelector('#hint');
const lessonDescription = document.querySelector('#lesson-description');
const lessonTitle = document.querySelector('#lesson-title');
const modeTabs = document.querySelectorAll('.mode-tab');
const progress = document.querySelector('#progress');
const prompt = document.querySelector('#prompt');
const promptLabel = document.querySelector('#prompt-label');
const restartButton = document.querySelector('#restart-button');
const scoreDisplay = document.querySelector('#score');
const skipButton = document.querySelector('#skip-button');
const streakDisplay = document.querySelector('#streak');
const topicEyebrow = document.querySelector('#topic-eyebrow');
const topicStrip = document.querySelector('#topic-strip');
const wordList = document.querySelector('#word-list');

function getActiveSet() {
  return topicSets[activeTopic];
}

function getActiveWords() {
  return getActiveSet().words;
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, '');
}

function getCurrentWord() {
  return getActiveWords()[currentIndex];
}

function resetSet(message) {
  currentIndex = 0;
  score = 0;
  streak = 0;
  setFeedback(message || `${getActiveSet().label} set selected.`);
  renderLesson();
  renderQuestion();
}

function renderTopics() {
  topicStrip.innerHTML = Object.entries(topicSets)
    .map(([key, set]) => (
      `<button class="topic-button${key === activeTopic ? ' active' : ''}" type="button" data-topic="${key}">${set.label}</button>`
    ))
    .join('');
}

function renderLesson() {
  const set = getActiveSet();

  topicEyebrow.textContent = `${set.label} set`;
  lessonTitle.textContent = set.label;
  lessonDescription.textContent = set.description;
  wordList.innerHTML = set.words
    .map((word) => `<li><span>${word.korean}</span><span>${word.english}</span></li>`)
    .join('');
  renderTopics();
}

function renderQuestion() {
  const word = getCurrentWord();
  const isMeaningMode = mode === 'meaning';

  prompt.textContent = isMeaningMode ? word.english : word.romanization;
  promptLabel.textContent = isMeaningMode ? 'Type this in Korean' : 'Type the Korean word for this romanization';
  hint.textContent = isMeaningMode ? `Hint: ${word.romanization}` : `Meaning: ${word.english}`;
  progress.textContent = `${currentIndex + 1} / ${getActiveWords().length}`;
  streakDisplay.textContent = `${streak} streak`;
  scoreDisplay.textContent = score;
  answerInput.value = '';
  answerInput.focus();
}

function setFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type || ''}`.trim();
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % getActiveWords().length;
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
  resetSet(`${getActiveSet().label} set restarted.`);
});

modeTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    mode = tab.dataset.mode;
    modeTabs.forEach((item) => item.classList.toggle('active', item === tab));
    setFeedback(mode === 'meaning' ? 'English prompts are active.' : 'Romanization prompts are active.');
    renderQuestion();
  });
});

topicStrip.addEventListener('click', (event) => {
  const button = event.target.closest('[data-topic]');

  if (!button) {
    return;
  }

  activeTopic = button.dataset.topic;
  resetSet(`${getActiveSet().label} set selected. Review the words, then type the Korean answers.`);
});

renderLesson();
renderQuestion();
