const topicSets = {
  basics: {
    label: 'Basics',
    description: 'High-frequency starter words from the TOPIK I beginner vocabulary list.',
    words: [
      { korean: '안녕하세요', english: 'Hello', romanization: 'annyeonghaseyo' },
      { korean: '감사합니다', english: 'Thank you', romanization: 'gamsahamnida' },
      { korean: '네', english: 'Yes', romanization: 'ne' },
      { korean: '아니요', english: 'No', romanization: 'aniyo' },
      { korean: '괜찮다', english: 'Be okay', romanization: 'gwaenchanta' },
      { korean: '같이', english: 'Together', romanization: 'gachi' },
      { korean: '그냥', english: 'Just / as it is', romanization: 'geunyang' },
      { korean: '다시', english: 'Again', romanization: 'dasi' },
      { korean: '정말', english: 'Really', romanization: 'jeongmal' },
      { korean: '조금', english: 'A little', romanization: 'jogeum' },
      { korean: '많이', english: 'A lot', romanization: 'mani' },
      { korean: '지금', english: 'Now', romanization: 'jigeum' }
    ]
  },
  food: {
    label: 'Food',
    description: 'Meals, dishes, and ingredients that appear in beginner TOPIK vocabulary.',
    words: [
      { korean: '밥', english: 'Rice / meal', romanization: 'bap' },
      { korean: '물', english: 'Water', romanization: 'mul' },
      { korean: '고기', english: 'Meat', romanization: 'gogi' },
      { korean: '닭고기', english: 'Chicken meat', romanization: 'dakgogi' },
      { korean: '계란', english: 'Egg', romanization: 'gyeran' },
      { korean: '김치', english: 'Kimchi', romanization: 'gimchi' },
      { korean: '김밥', english: 'Gimbap', romanization: 'gimbap' },
      { korean: '국수', english: 'Noodles', romanization: 'guksu' },
      { korean: '냉면', english: 'Cold noodles', romanization: 'naengmyeon' },
      { korean: '갈비', english: 'Spareribs', romanization: 'galbi' },
      { korean: '감자탕', english: 'Potato soup', romanization: 'gamjatang' },
      { korean: '고추장', english: 'Red pepper paste', romanization: 'gochujang' },
      { korean: '간장', english: 'Soy sauce', romanization: 'ganjang' },
      { korean: '과자', english: 'Snack', romanization: 'gwaja' },
      { korean: '녹차', english: 'Green tea', romanization: 'nokcha' },
      { korean: '커피', english: 'Coffee', romanization: 'keopi' }
    ]
  },
  fruits: {
    label: 'Fruits',
    description: 'Fruit and produce words useful for markets and daily meals.',
    words: [
      { korean: '과일', english: 'Fruit', romanization: 'gwail' },
      { korean: '사과', english: 'Apple', romanization: 'sagwa' },
      { korean: '바나나', english: 'Banana', romanization: 'banana' },
      { korean: '딸기', english: 'Strawberry', romanization: 'ttalgi' },
      { korean: '포도', english: 'Grapes', romanization: 'podo' },
      { korean: '수박', english: 'Watermelon', romanization: 'subak' },
      { korean: '복숭아', english: 'Peach', romanization: 'boksunga' },
      { korean: '오렌지', english: 'Orange', romanization: 'orenji' },
      { korean: '배', english: 'Pear', romanization: 'bae' },
      { korean: '귤', english: 'Mandarin orange', romanization: 'gyul' },
      { korean: '감', english: 'Persimmon', romanization: 'gam' },
      { korean: '감자', english: 'Potato', romanization: 'gamja' },
      { korean: '당근', english: 'Carrot', romanization: 'danggeun' },
      { korean: '고추', english: 'Red pepper', romanization: 'gochu' }
    ]
  },
  family: {
    label: 'Family',
    description: 'Family and people words for introductions and conversation.',
    words: [
      { korean: '가족', english: 'Family', romanization: 'gajok' },
      { korean: '어머니', english: 'Mother', romanization: 'eomeoni' },
      { korean: '아버지', english: 'Father', romanization: 'abeoji' },
      { korean: '부모님', english: 'Parents', romanization: 'bumonim' },
      { korean: '남동생', english: 'Younger brother', romanization: 'namdongsaeng' },
      { korean: '동생', english: 'Younger sibling', romanization: 'dongsaeng' },
      { korean: '형', english: 'Older brother', romanization: 'hyeong' },
      { korean: '누나', english: 'Older sister', romanization: 'nuna' },
      { korean: '남편', english: 'Husband', romanization: 'nampyeon' },
      { korean: '고모', english: 'Paternal aunt', romanization: 'gomo' },
      { korean: '친구', english: 'Friend', romanization: 'chingu' },
      { korean: '남자', english: 'Man', romanization: 'namja' }
    ]
  },
  school: {
    label: 'School',
    description: 'Study, classroom, and student vocabulary for TOPIK I.',
    words: [
      { korean: '학교', english: 'School', romanization: 'hakgyo' },
      { korean: '대학교', english: 'University', romanization: 'daehakgyo' },
      { korean: '대학생', english: 'College student', romanization: 'daehaksaeng' },
      { korean: '고등학교', english: 'High school', romanization: 'godeunghakgyo' },
      { korean: '학생', english: 'Student', romanization: 'haksaeng' },
      { korean: '교실', english: 'Classroom', romanization: 'gyosil' },
      { korean: '교과서', english: 'Textbook', romanization: 'gyogwaseo' },
      { korean: '공책', english: 'Notebook', romanization: 'gongchaek' },
      { korean: '단어', english: 'Word', romanization: 'daneo' },
      { korean: '공부', english: 'Study', romanization: 'gongbu' },
      { korean: '공부하다', english: 'Study', romanization: 'gongbuhada' },
      { korean: '가르치다', english: 'Teach', romanization: 'gareuchida' },
      { korean: '교수', english: 'Professor', romanization: 'gyosu' },
      { korean: '기숙사', english: 'Dormitory', romanization: 'gisuksa' }
    ]
  },
  places: {
    label: 'Places',
    description: 'Buildings, public places, and locations from beginner vocabulary.',
    words: [
      { korean: '가게', english: 'Store / shop', romanization: 'gage' },
      { korean: '공원', english: 'Park', romanization: 'gongwon' },
      { korean: '공항', english: 'Airport', romanization: 'gonghang' },
      { korean: '경찰서', english: 'Police station', romanization: 'gyeongchalseo' },
      { korean: '교회', english: 'Church', romanization: 'gyohoe' },
      { korean: '극장', english: 'Theater / cinema', romanization: 'geukjang' },
      { korean: '경기장', english: 'Stadium', romanization: 'gyeonggijang' },
      { korean: '건물', english: 'Building', romanization: 'geonmul' },
      { korean: '거리', english: 'Street', romanization: 'geori' },
      { korean: '골목', english: 'Alley', romanization: 'golmok' },
      { korean: '근처', english: 'Nearby', romanization: 'geuncheo' },
      { korean: '거실', english: 'Living room', romanization: 'geosil' },
      { korean: '꽃집', english: 'Flower shop', romanization: 'kkotjip' },
      { korean: '남대문시장', english: 'Namdaemun Market', romanization: 'namdaemun sijang' }
    ]
  },
  transport: {
    label: 'Transport',
    description: 'Travel and transportation words for moving around Korea.',
    words: [
      { korean: '기차', english: 'Train', romanization: 'gicha' },
      { korean: '고속버스', english: 'Express bus', romanization: 'gosokbeoseu' },
      { korean: '공항', english: 'Airport', romanization: 'gonghang' },
      { korean: '교통', english: 'Traffic', romanization: 'gyotong' },
      { korean: '교통사고', english: 'Traffic accident', romanization: 'gyotongsago' },
      { korean: '갈아타다', english: 'Transfer', romanization: 'garatada' },
      { korean: '가져가다', english: 'Take away', romanization: 'gajyeogada' },
      { korean: '가져오다', english: 'Bring', romanization: 'gajyeooda' },
      { korean: '건너가다', english: 'Cross over', romanization: 'geonneogada' },
      { korean: '걷다', english: 'Walk', romanization: 'geotda' },
      { korean: '걸어가다', english: 'Walk there', romanization: 'georeogada' },
      { korean: '길', english: 'Road / way', romanization: 'gil' }
    ]
  },
  health: {
    label: 'Health',
    description: 'Body, medicine, and health-related beginner words.',
    words: [
      { korean: '건강', english: 'Health', romanization: 'geongang' },
      { korean: '건강하다', english: 'Be healthy', romanization: 'geonganghada' },
      { korean: '감기', english: 'Cold', romanization: 'gamgi' },
      { korean: '감기약', english: 'Cold medicine', romanization: 'gamgiyak' },
      { korean: '기침', english: 'Cough', romanization: 'gichim' },
      { korean: '내과', english: 'Internal medicine clinic', romanization: 'naegwa' },
      { korean: '간호사', english: 'Nurse', romanization: 'ganhosa' },
      { korean: '다치다', english: 'Get hurt', romanization: 'dachida' },
      { korean: '가슴', english: 'Chest', romanization: 'gaseum' },
      { korean: '귀', english: 'Ear', romanization: 'gwi' },
      { korean: '눈', english: 'Eye / snow', romanization: 'nun' },
      { korean: '긴장되다', english: 'Be nervous', romanization: 'ginjangdoeda' }
    ]
  },
  exercise: {
    label: 'Exercise',
    description: 'Sports, workouts, and movement vocabulary.',
    words: [
      { korean: '운동', english: 'Exercise', romanization: 'undong' },
      { korean: '달리기', english: 'Running', romanization: 'dalligi' },
      { korean: '달리다', english: 'Run', romanization: 'dallida' },
      { korean: '걷기', english: 'Walking', romanization: 'geotgi' },
      { korean: '수영', english: 'Swimming', romanization: 'suyeong' },
      { korean: '축구', english: 'Soccer', romanization: 'chukgu' },
      { korean: '농구', english: 'Basketball', romanization: 'nonggu' },
      { korean: '골프', english: 'Golf', romanization: 'golpeu' },
      { korean: '경기', english: 'Game / match', romanization: 'gyeonggi' },
      { korean: '공', english: 'Ball', romanization: 'gong' },
      { korean: '놀다', english: 'Play', romanization: 'nolda' },
      { korean: '다이어트', english: 'Diet', romanization: 'daieoteu' }
    ]
  },
  weatherTime: {
    label: 'Time & Weather',
    description: 'Seasons, dates, weather, and calendar vocabulary.',
    words: [
      { korean: '날씨', english: 'Weather', romanization: 'nalssi' },
      { korean: '계절', english: 'Season', romanization: 'gyejeol' },
      { korean: '가을', english: 'Autumn', romanization: 'gaeul' },
      { korean: '겨울', english: 'Winter', romanization: 'gyeoul' },
      { korean: '구름', english: 'Cloud', romanization: 'gureum' },
      { korean: '눈사람', english: 'Snowman', romanization: 'nunsaram' },
      { korean: '낮', english: 'Daytime / noon', romanization: 'nat' },
      { korean: '내일', english: 'Tomorrow', romanization: 'naeil' },
      { korean: '내년', english: 'Next year', romanization: 'naenyeon' },
      { korean: '다음주', english: 'Next week', romanization: 'daeumju' },
      { korean: '다음달', english: 'Next month', romanization: 'daeumdal' },
      { korean: '날짜', english: 'Date', romanization: 'naljja' },
      { korean: '달력', english: 'Calendar', romanization: 'dallyeok' },
      { korean: '금요일', english: 'Friday', romanization: 'geumyoil' },
      { korean: '구월', english: 'September', romanization: 'guwol' }
    ]
  },
  shopping: {
    label: 'Shopping',
    description: 'Money, stores, prices, and everyday purchase words.',
    words: [
      { korean: '가게', english: 'Store / shop', romanization: 'gage' },
      { korean: '가격', english: 'Price', romanization: 'gagyeok' },
      { korean: '값', english: 'Price', romanization: 'gap' },
      { korean: '공짜', english: 'Free', romanization: 'gongjja' },
      { korean: '달러', english: 'Dollar', romanization: 'dalleo' },
      { korean: '계산하다', english: 'Calculate / pay', romanization: 'gyesanhada' },
      { korean: '고르다', english: 'Choose', romanization: 'goreuda' },
      { korean: '구두', english: 'Dress shoes', romanization: 'gudu' },
      { korean: '가방', english: 'Bag', romanization: 'gabang' },
      { korean: '넥타이', english: 'Necktie', romanization: 'nektai' },
      { korean: '껌', english: 'Chewing gum', romanization: 'kkeom' },
      { korean: '꽃집', english: 'Flower shop', romanization: 'kkotjip' }
    ]
  },
  colorsNumbers: {
    label: 'Colors & Numbers',
    description: 'Colors, counting words, and beginner number vocabulary.',
    words: [
      { korean: '갈색', english: 'Brown', romanization: 'galsaek' },
      { korean: '검은색', english: 'Black', romanization: 'geomeunsaek' },
      { korean: '까만색', english: 'Black color', romanization: 'kkamansaek' },
      { korean: '노란색', english: 'Yellow color', romanization: 'noransaek' },
      { korean: '녹색', english: 'Green', romanization: 'noksaek' },
      { korean: '하얀색', english: 'White color', romanization: 'hayansaek' },
      { korean: '빨간색', english: 'Red color', romanization: 'ppalgansaek' },
      { korean: '파란색', english: 'Blue color', romanization: 'paransaek' },
      { korean: '넷', english: 'Four', romanization: 'net' },
      { korean: '넷째', english: 'Fourth', romanization: 'netjjae' },
      { korean: '구', english: 'Nine', romanization: 'gu' },
      { korean: '구십', english: 'Ninety', romanization: 'gusip' }
    ]
  },
  homeObjects: {
    label: 'Home & Objects',
    description: 'Household items and common objects from the TOPIK I list.',
    words: [
      { korean: '가구', english: 'Furniture', romanization: 'gagu' },
      { korean: '거실', english: 'Living room', romanization: 'geosil' },
      { korean: '거울', english: 'Mirror', romanization: 'geoul' },
      { korean: '그릇', english: 'Bowl / tableware', romanization: 'geureut' },
      { korean: '냄비', english: 'Pot', romanization: 'naembi' },
      { korean: '냉장고', english: 'Refrigerator', romanization: 'naengjanggo' },
      { korean: '가위', english: 'Scissors', romanization: 'gawi' },
      { korean: '공책', english: 'Notebook', romanization: 'gongchaek' },
      { korean: '노트', english: 'Note / notebook', romanization: 'noteu' },
      { korean: '달력', english: 'Calendar', romanization: 'dallyeok' },
      { korean: '담배', english: 'Cigarette / tobacco', romanization: 'dambae' },
      { korean: '기름', english: 'Oil / gasoline', romanization: 'gireum' }
    ]
  },
  animalsNature: {
    label: 'Animals & Nature',
    description: 'Animals, plants, and nature vocabulary for beginner review.',
    words: [
      { korean: '강아지', english: 'Puppy', romanization: 'gangaji' },
      { korean: '개', english: 'Dog', romanization: 'gae' },
      { korean: '고양이', english: 'Cat', romanization: 'goyangi' },
      { korean: '닭', english: 'Chicken / hen', romanization: 'dak' },
      { korean: '나무', english: 'Tree', romanization: 'namu' },
      { korean: '꽃', english: 'Flower', romanization: 'kkot' },
      { korean: '개나리', english: 'Forsythia', romanization: 'gaenari' },
      { korean: '가지', english: 'Branch', romanization: 'gaji' },
      { korean: '강', english: 'River', romanization: 'gang' },
      { korean: '공기', english: 'Air', romanization: 'gonggi' },
      { korean: '구름', english: 'Cloud', romanization: 'gureum' },
      { korean: '남쪽', english: 'South', romanization: 'namjjok' }
    ]
  }
};

let activeTopic = 'basics';
let isChallengeMode = false;
let challengeQuestionCount = 0;
const challengeWords = Object.values(topicSets).flatMap((set) => set.words.map((word) => ({ ...word, topic: set.label })));
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

function getChallengeWord() {
  return challengeWords[currentIndex];
}

function getActiveWords() {
  if (isChallengeMode) {
    return challengeWords;
  }
  return getActiveSet().words;
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, '');
}

function getCurrentWord() {
  if (isChallengeMode) {
    return getChallengeWord();
  }
  return getActiveWords()[currentIndex];
}

function getRandomChallengeIndex(previousIndex) {
  if (challengeWords.length <= 1) {
    return 0;
  }

  let nextIndex = previousIndex;

  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * challengeWords.length);
  }

  return nextIndex;
}

function resetSet(message) {
  isChallengeMode = false;
  currentIndex = 0;
  score = 0;
  streak = 0;
  challengeQuestionCount = 0;
  setFeedback(message || `${getActiveSet().label} set selected.`);
  renderLesson();
  renderQuestion();
}

function startChallengeMode() {
  isChallengeMode = true;
  currentIndex = getRandomChallengeIndex(-1);
  score = 0;
  streak = 0;
  challengeQuestionCount = 1;
  setFeedback('Challenge mode started. Every vocabulary topic is active, and one mistake resets your score.');
  renderLesson();
  renderQuestion();
}

function renderTopics() {
  const topicButtons = Object.entries(topicSets)
    .map(([key, set]) => (
      `<button class="topic-button${!isChallengeMode && key === activeTopic ? ' active' : ''}" type="button" data-topic="${key}">${set.label}</button>`
    ))
    .join('');

  topicStrip.innerHTML = `<button class="topic-button challenge${isChallengeMode ? ' active' : ''}" type="button" data-challenge="true">Challenge</button>${topicButtons}`;
}

function renderLesson() {
  if (isChallengeMode) {
    topicEyebrow.textContent = 'Challenge mode';
    lessonTitle.textContent = 'All Vocabulary';
    lessonDescription.textContent = `Infinite test mode using ${challengeWords.length} words from every topic. Wrong answers reset the score to zero.`;
    wordList.innerHTML = Object.values(topicSets)
      .map((set) => `<li><span>${set.label}</span><span>${set.words.length} words</span></li>`)
      .join('');
    renderTopics();
    return;
  }

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
  promptLabel.textContent = isChallengeMode ? `Challenge: ${word.topic}` : (isMeaningMode ? 'Type this in Korean' : 'Type the Korean word for this romanization');
  hint.textContent = isMeaningMode ? `Hint: ${word.romanization}` : `Meaning: ${word.english}`;
  progress.textContent = isChallengeMode ? `Question ${challengeQuestionCount}` : `${currentIndex + 1} / ${getActiveWords().length}`;
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
  if (isChallengeMode) {
    currentIndex = getRandomChallengeIndex(currentIndex);
    challengeQuestionCount += 1;
    renderQuestion();
    return;
  }

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
  score = isChallengeMode ? 0 : Math.max(0, score - 2);
  streakDisplay.textContent = `${streak} streak`;
  scoreDisplay.textContent = score;
  setFeedback(isChallengeMode ? `Challenge reset. Answer: ${word.korean} (${word.romanization}).` : `Try again. Answer: ${word.korean} (${word.romanization}).`, 'wrong');
  answerInput.select();
});

skipButton.addEventListener('click', () => {
  const word = getCurrentWord();
  streak = 0;
  score = isChallengeMode ? 0 : score;
  scoreDisplay.textContent = score;
  setFeedback(isChallengeMode ? `Skipped. Challenge score reset. ${word.english}: ${word.korean} (${word.romanization}).` : `Skipped. ${word.english}: ${word.korean} (${word.romanization}).`, 'wrong');
  window.setTimeout(nextQuestion, 900);
});

restartButton.addEventListener('click', () => {
  if (isChallengeMode) {
    startChallengeMode();
    return;
  }

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
  const challengeButton = event.target.closest('[data-challenge]');

  if (challengeButton) {
    startChallengeMode();
    return;
  }

  const button = event.target.closest('[data-topic]');

  if (!button) {
    return;
  }

  activeTopic = button.dataset.topic;
  resetSet(`${getActiveSet().label} set selected. Review the words, then type the Korean answers.`);
});
renderLesson();
renderQuestion();
