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
      { korean: '지금', english: 'Now', romanization: 'jigeum' },
      { korean: '가다', english: 'Go', romanization: 'gada' },
      { korean: '오다', english: 'Come', romanization: 'oda' },
      { korean: '하다', english: 'Do', romanization: 'hada' },
      { korean: '있다', english: 'Exist / have', romanization: 'itda' },
      { korean: '없다', english: 'Not exist / not have', romanization: 'eopda' },
      { korean: '알다', english: 'Know', romanization: 'alda' },
      { korean: '모르다', english: 'Do not know', romanization: 'moreuda' },
      { korean: '좋다', english: 'Good', romanization: 'jota' }
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
      { korean: '커피', english: 'Coffee', romanization: 'keopi' },
      { korean: '국', english: 'Soup', romanization: 'guk' },
      { korean: '김치찌개', english: 'Kimchi stew', romanization: 'gimchi jjigae' },
      { korean: '된장찌개', english: 'Soybean paste stew', romanization: 'doenjang jjigae' },
      { korean: '떡볶이', english: 'Tteokbokki', romanization: 'tteokbokki' }
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
      { korean: '고추', english: 'Red pepper', romanization: 'gochu' },
      { korean: '마늘', english: 'Garlic', romanization: 'maneul' },
      { korean: '무', english: 'Radish', romanization: 'mu' },
      { korean: '양파', english: 'Onion', romanization: 'yangpa' },
      { korean: '배추', english: 'Napa cabbage', romanization: 'baechu' },
      { korean: '토마토', english: 'Tomato', romanization: 'tomato' },
      { korean: '호박', english: 'Pumpkin / squash', romanization: 'hobak' }
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
      { korean: '남자', english: 'Man', romanization: 'namja' },
      { korean: '여자', english: 'Woman', romanization: 'yeoja' },
      { korean: '아내', english: 'Wife', romanization: 'anae' },
      { korean: '아들', english: 'Son', romanization: 'adeul' },
      { korean: '딸', english: 'Daughter', romanization: 'ttal' },
      { korean: '아이', english: 'Child', romanization: 'ai' },
      { korean: '아기', english: 'Baby', romanization: 'agi' },
      { korean: '할머니', english: 'Grandmother', romanization: 'halmeoni' },
      { korean: '할아버지', english: 'Grandfather', romanization: 'harabeoji' }
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
      { korean: '기숙사', english: 'Dormitory', romanization: 'gisuksa' },
      { korean: '숙제', english: 'Homework', romanization: 'sukje' },
      { korean: '수업', english: 'Class / lesson', romanization: 'sueop' },
      { korean: '수학', english: 'Mathematics', romanization: 'suhak' },
      { korean: '과학', english: 'Science', romanization: 'gwahak' },
      { korean: '도서관', english: 'Library', romanization: 'doseogwan' },
      { korean: '시험', english: 'Exam', romanization: 'siheom' }
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
      { korean: '남대문시장', english: 'Namdaemun Market', romanization: 'namdaemun sijang' },
      { korean: '도서관', english: 'Library', romanization: 'doseogwan' },
      { korean: '병원', english: 'Hospital', romanization: 'byeongwon' },
      { korean: '식당', english: 'Restaurant', romanization: 'sikdang' },
      { korean: '은행', english: 'Bank', romanization: 'eunhaeng' },
      { korean: '우체국', english: 'Post office', romanization: 'ucheguk' },
      { korean: '지하철역', english: 'Subway station', romanization: 'jihacheolyeok' }
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
      { korean: '길', english: 'Road / way', romanization: 'gil' },
      { korean: '버스', english: 'Bus', romanization: 'beoseu' },
      { korean: '비행기', english: 'Airplane', romanization: 'bihaenggi' },
      { korean: '지하철', english: 'Subway', romanization: 'jihacheol' },
      { korean: '택시', english: 'Taxi', romanization: 'taeksi' },
      { korean: '자전거', english: 'Bicycle', romanization: 'jajeongeo' },
      { korean: '출발하다', english: 'Depart', romanization: 'chulbalhada' },
      { korean: '도착하다', english: 'Arrive', romanization: 'dochakhada' },
      { korean: '여행', english: 'Travel', romanization: 'yeohaeng' }
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
      { korean: '긴장되다', english: 'Be nervous', romanization: 'ginjangdoeda' },
      { korean: '머리', english: 'Head / hair', romanization: 'meori' },
      { korean: '목', english: 'Neck / throat', romanization: 'mok' },
      { korean: '손', english: 'Hand', romanization: 'son' },
      { korean: '손가락', english: 'Finger', romanization: 'songarak' },
      { korean: '몸', english: 'Body', romanization: 'mom' },
      { korean: '아프다', english: 'Be sick / painful', romanization: 'apeuda' },
      { korean: '약', english: 'Medicine', romanization: 'yak' },
      { korean: '치과', english: 'Dentist / dental clinic', romanization: 'chigwa' }
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
      { korean: '다이어트', english: 'Diet', romanization: 'daieoteu' },
      { korean: '등산', english: 'Hiking', romanization: 'deungsan' },
      { korean: '스키', english: 'Skiing', romanization: 'seuki' },
      { korean: '스케이트', english: 'Skating', romanization: 'seukeiteu' },
      { korean: '스포츠', english: 'Sport', romanization: 'seupocheu' },
      { korean: '수영장', english: 'Swimming pool', romanization: 'suyeongjang' },
      { korean: '운동장', english: 'Playground / sports field', romanization: 'undongjang' },
      { korean: '이기다', english: 'Win', romanization: 'igida' },
      { korean: '지다', english: 'Lose', romanization: 'jida' }
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
      { korean: '구월', english: 'September', romanization: 'guwol' },
      { korean: '봄', english: 'Spring', romanization: 'bom' },
      { korean: '여름', english: 'Summer', romanization: 'yeoreum' },
      { korean: '비', english: 'Rain', romanization: 'bi' },
      { korean: '바람', english: 'Wind', romanization: 'baram' },
      { korean: '시간', english: 'Time', romanization: 'sigan' }
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
      { korean: '꽃집', english: 'Flower shop', romanization: 'kkotjip' },
      { korean: '돈', english: 'Money', romanization: 'don' },
      { korean: '동전', english: 'Coin', romanization: 'dongjeon' },
      { korean: '시장', english: 'Market', romanization: 'sijang' },
      { korean: '슈퍼마켓', english: 'Supermarket', romanization: 'syupeomaket' },
      { korean: '쇼핑', english: 'Shopping', romanization: 'syoping' },
      { korean: '사다', english: 'Buy', romanization: 'sada' },
      { korean: '팔다', english: 'Sell', romanization: 'palda' },
      { korean: '싸다', english: 'Cheap', romanization: 'ssada' }
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
      { korean: '구십', english: 'Ninety', romanization: 'gusip' },
      { korean: '하나', english: 'One', romanization: 'hana' },
      { korean: '둘', english: 'Two', romanization: 'dul' },
      { korean: '셋', english: 'Three', romanization: 'set' },
      { korean: '다섯', english: 'Five', romanization: 'daseot' },
      { korean: '여섯', english: 'Six', romanization: 'yeoseot' },
      { korean: '일곱', english: 'Seven', romanization: 'ilgop' },
      { korean: '여덟', english: 'Eight', romanization: 'yeodeol' },
      { korean: '열', english: 'Ten', romanization: 'yeol' }
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
      { korean: '기름', english: 'Oil / gasoline', romanization: 'gireum' },
      { korean: '방', english: 'Room', romanization: 'bang' },
      { korean: '문', english: 'Door', romanization: 'mun' },
      { korean: '창문', english: 'Window', romanization: 'changmun' },
      { korean: '책상', english: 'Desk', romanization: 'chaeksang' },
      { korean: '의자', english: 'Chair', romanization: 'uija' },
      { korean: '침대', english: 'Bed', romanization: 'chimdae' },
      { korean: '소파', english: 'Sofa', romanization: 'sopa' },
      { korean: '세탁기', english: 'Washing machine', romanization: 'setakgi' }
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
      { korean: '남쪽', english: 'South', romanization: 'namjjok' },
      { korean: '동물', english: 'Animal', romanization: 'dongmul' },
      { korean: '돼지', english: 'Pig', romanization: 'dwaeji' },
      { korean: '소', english: 'Cow', romanization: 'so' },
      { korean: '새', english: 'Bird', romanization: 'sae' },
      { korean: '바다', english: 'Sea', romanization: 'bada' },
      { korean: '산', english: 'Mountain', romanization: 'san' },
      { korean: '섬', english: 'Island', romanization: 'seom' },
      { korean: '하늘', english: 'Sky', romanization: 'haneul' }
    ]
  }
};

const extraTopicWords = {
  basics: [
    { korean: '가깝다', english: 'Close' },
    { korean: '가끔', english: 'Sometimes' },
    { korean: '가볍다', english: 'Light' },
    { korean: '가장', english: 'Most' },
    { korean: '가지다', english: 'Have' },
    { korean: '간단하다', english: 'Simple / easy' },
    { korean: '갑자기', english: 'Suddenly' },
    { korean: '거기', english: 'There' },
    { korean: '거의', english: 'Almost / nearly' },
    { korean: '걱정하다', english: 'Worry' },
    { korean: '계속', english: 'Continue' },
    { korean: '곧', english: 'Soon' },
    { korean: '그때', english: 'Then / at that time' },
    { korean: '그래서', english: 'So / therefore' },
    { korean: '그러나', english: 'But / however' },
    { korean: '그러면', english: 'Then / if so' },
    { korean: '그런데', english: 'By the way / however' },
    { korean: '그리고', english: 'And' },
    { korean: '기다리다', english: 'Wait' },
    { korean: '기분', english: 'Feeling / mood' },
    { korean: '깨끗하다', english: 'Clean' },
    { korean: '꼭', english: 'Exactly / surely' },
    { korean: '끝나다', english: 'Finish / end' },
    { korean: '나가다', english: 'Go out' },
    { korean: '나오다', english: 'Come out / appear' },
    { korean: '너무', english: 'Too / very' },
    { korean: '다르다', english: 'Different' },
    { korean: '다음', english: 'Next / after' },
    { korean: '더', english: 'More' },
    { korean: '먼저', english: 'First' }
  ],
  food: [
    { korean: '갈비탕', english: 'Spareribs soup' },
    { korean: '간식', english: 'Snack' },
    { korean: '국', english: 'Soup' },
    { korean: '김', english: 'Seaweed' },
    { korean: '김치찌개', english: 'Kimchi stew' },
    { korean: '달걀', english: 'Egg' },
    { korean: '된장', english: 'Soybean paste' },
    { korean: '된장국', english: 'Soybean paste soup' },
    { korean: '된장찌개', english: 'Soybean paste stew' },
    { korean: '두부', english: 'Tofu' },
    { korean: '두부찌개', english: 'Tofu stew' },
    { korean: '떡', english: 'Rice cake' },
    { korean: '떡국', english: 'Rice cake soup' },
    { korean: '떡볶이', english: 'Tteokbokki' },
    { korean: '라면', english: 'Ramen' },
    { korean: '만두', english: 'Dumpling' },
    { korean: '맛', english: 'Flavor / taste' },
    { korean: '맛없다', english: 'Not delicious' },
    { korean: '맛있다', english: 'Delicious' },
    { korean: '맥주', english: 'Beer' },
    { korean: '맵다', english: 'Spicy' },
    { korean: '메뉴', english: 'Menu' },
    { korean: '먹다', english: 'Eat' },
    { korean: '소고기', english: 'Beef' },
    { korean: '소금', english: 'Salt' },
    { korean: '수저', english: 'Spoon and chopsticks' },
    { korean: '숟가락', english: 'Spoon' },
    { korean: '술', english: 'Alcohol' },
    { korean: '쌀', english: 'Rice grain' },
    { korean: '아침밥', english: 'Breakfast' },
    { korean: '돼지고기', english: 'Pork' },
    { korean: '불고기', english: 'Bulgogi' },
    { korean: '비빔밥', english: 'Bibimbap' },
    { korean: '빵', english: 'Bread' },
    { korean: '생선', english: 'Fish' },
    { korean: '설렁탕', english: 'Seolleongtang' }
  ],
  fruits: [
    { korean: '채소', english: 'Vegetable' },
    { korean: '야채', english: 'Vegetable' },
    { korean: '마늘', english: 'Garlic' },
    { korean: '무', english: 'Radish' },
    { korean: '배추', english: 'Napa cabbage' },
    { korean: '양파', english: 'Onion' },
    { korean: '오이', english: 'Cucumber' },
    { korean: '토마토', english: 'Tomato' },
    { korean: '호박', english: 'Pumpkin / squash' },
    { korean: '파', english: 'Green onion' },
    { korean: '콩', english: 'Bean' },
    { korean: '쌀', english: 'Rice grain' },
    { korean: '감자', english: 'Potato' },
    { korean: '당근', english: 'Carrot' },
    { korean: '고추', english: 'Red pepper' },
    { korean: '가지', english: 'Eggplant' },
    { korean: '버섯', english: 'Mushroom' },
    { korean: '옥수수', english: 'Corn' },
    { korean: '레몬', english: 'Lemon' },
    { korean: '멜론', english: 'Melon' },
    { korean: '망고', english: 'Mango' },
    { korean: '자두', english: 'Plum' },
    { korean: '대추', english: 'Jujube' },
    { korean: '밤', english: 'Chestnut' },
    { korean: '호두', english: 'Walnut' },
    { korean: '땅콩', english: 'Peanut' },
    { korean: '콩나물', english: 'Bean sprout' },
    { korean: '시금치', english: 'Spinach' },
    { korean: '상추', english: 'Lettuce' },
    { korean: '미역', english: 'Seaweed' },
    { korean: '참외', english: 'Korean melon' },
    { korean: '양배추', english: 'Cabbage' },
    { korean: '브로콜리', english: 'Broccoli' },
    { korean: '깻잎', english: 'Perilla leaf' },
    { korean: '대파', english: 'Green onion' },
    { korean: '부추', english: 'Garlic chives' },
    { korean: '고구마', english: 'Sweet potato' },
    { korean: '옥수수', english: 'Corn' },
    { korean: '완두콩', english: 'Pea' },
    { korean: '양상추', english: 'Lettuce' }
  ],
  family: [
    { korean: '아버님', english: 'Father' },
    { korean: '아빠', english: 'Dad' },
    { korean: '어머님', english: 'Mother' },
    { korean: '엄마', english: 'Mom' },
    { korean: '오빠', english: 'Older brother' },
    { korean: '언니', english: 'Older sister' },
    { korean: '여동생', english: 'Younger sister' },
    { korean: '부인', english: 'Wife / madam' },
    { korean: '사람', english: 'Person' },
    { korean: '아저씨', english: 'Mister / uncle' },
    { korean: '아주머니', english: 'Madam / aunt' },
    { korean: '아줌마', english: 'Aunt / older woman' },
    { korean: '아가씨', english: 'Miss' },
    { korean: '어른', english: 'Adult' },
    { korean: '어린이', english: 'Child' },
    { korean: '남학생', english: 'Male student' },
    { korean: '여학생', english: 'Female student' },
    { korean: '선생님', english: 'Teacher' },
    { korean: '손님', english: 'Customer / guest' },
    { korean: '성함', english: 'Name' },
    { korean: '이름', english: 'Name' },
    { korean: '나이', english: 'Age' },
    { korean: '개인', english: 'Individual' },
    { korean: '여러분', english: 'Everyone' },
    { korean: '우리', english: 'We / our' },
    { korean: '그들', english: 'They' },
    { korean: '누구', english: 'Who' },
    { korean: '남녀', english: 'Men and women' },
    { korean: '신랑', english: 'Groom' },
    { korean: '신부', english: 'Bride' }
  ],
  school: [
    { korean: '고등학생', english: 'High school student' },
    { korean: '남학생', english: 'Male student' },
    { korean: '여학생', english: 'Female student' },
    { korean: '대학', english: 'University / college' },
    { korean: '대학원', english: 'Graduate school' },
    { korean: '대학원생', english: 'Graduate student' },
    { korean: '강좌', english: 'Lecture' },
    { korean: '수첩', english: 'Notebook' },
    { korean: '쓰기', english: 'Writing' },
    { korean: '듣기', english: 'Listening' },
    { korean: '말하기', english: 'Speaking' },
    { korean: '국어', english: 'Korean language' },
    { korean: '영어', english: 'English' },
    { korean: '일본어', english: 'Japanese' },
    { korean: '중국어', english: 'Chinese' },
    { korean: '아랍어', english: 'Arabic' },
    { korean: '스페인어', english: 'Spanish' },
    { korean: '독서', english: 'Reading' },
    { korean: '독서실', english: 'Reading room' },
    { korean: '독서하다', english: 'Read' },
    { korean: '배우다', english: 'Learn' },
    { korean: '외우다', english: 'Memorize' },
    { korean: '질문', english: 'Question' },
    { korean: '대답', english: 'Answer' },
    { korean: '대답하다', english: 'Answer / reply' },
    { korean: '설명', english: 'Explanation' },
    { korean: '설명하다', english: 'Explain' },
    { korean: '연습', english: 'Practice' },
    { korean: '졸업', english: 'Graduation' },
    { korean: '학기', english: 'School semester' }
  ],
  places: [
    { korean: '계단', english: 'Stairs' },
    { korean: '경복궁', english: 'Gyeongbokgung Palace' },
    { korean: '경주', english: 'Gyeongju' },
    { korean: '김포공항', english: 'Gimpo International Airport' },
    { korean: '노래방', english: 'Karaoke room' },
    { korean: '대사관', english: 'Embassy' },
    { korean: '도로', english: 'Road' },
    { korean: '도시', english: 'City' },
    { korean: '동네', english: 'Neighborhood' },
    { korean: '동대문시장', english: 'Dongdaemun Market' },
    { korean: '목욕탕', english: 'Bathhouse' },
    { korean: '미술관', english: 'Art museum' },
    { korean: '박물관', english: 'Museum' },
    { korean: '백화점', english: 'Department store' },
    { korean: '사무실', english: 'Office' },
    { korean: '산', english: 'Mountain' },
    { korean: '시골', english: 'Countryside' },
    { korean: '시내', english: 'Downtown' },
    { korean: '시장', english: 'Market' },
    { korean: '약국', english: 'Pharmacy' },
    { korean: '여관', english: 'Inn' },
    { korean: '역', english: 'Station' },
    { korean: '영화관', english: 'Movie theater' },
    { korean: '운동장', english: 'Sports field' },
    { korean: '유치원', english: 'Kindergarten' },
    { korean: '은행', english: 'Bank' },
    { korean: '집', english: 'House / home' },
    { korean: '회사', english: 'Company' },
    { korean: '호텔', english: 'Hotel' },
    { korean: '화장실', english: 'Restroom' },
    { korean: '빌딩', english: 'Building' }
  ],
  transport: [
    { korean: '걸어오다', english: 'Walk here' },
    { korean: '건너다', english: 'Cross over' },
    { korean: '건너편', english: 'Opposite side' },
    { korean: '관광하다', english: 'Sightsee / travel' },
    { korean: '내려가다', english: 'Go down' },
    { korean: '내려오다', english: 'Come down' },
    { korean: '내리다', english: 'Get off / go down' },
    { korean: '다녀오다', english: 'Go and return' },
    { korean: '다니다', english: 'Commute / attend' },
    { korean: '돌아가다', english: 'Return / go back' },
    { korean: '돌아오다', english: 'Come back' },
    { korean: '들어가다', english: 'Go in' },
    { korean: '들어오다', english: 'Come in' },
    { korean: '따라가다', english: 'Follow' },
    { korean: '따라오다', english: 'Come along / follow' },
    { korean: '떠나다', english: 'Leave' },
    { korean: '뛰다', english: 'Run' },
    { korean: '막히다', english: 'Be blocked' },
    { korean: '멀다', english: 'Far' },
    { korean: '버스정류장', english: 'Bus stop' },
    { korean: '비행장', english: 'Airfield' },
    { korean: '올라가다', english: 'Go up' },
    { korean: '올라오다', english: 'Come up' },
    { korean: '운전', english: 'Driving' },
    { korean: '운전하다', english: 'Drive' },
    { korean: '자동차', english: 'Car' },
    { korean: '주차장', english: 'Parking lot' },
    { korean: '출구', english: 'Exit' },
    { korean: '표', english: 'Ticket' },
    { korean: '횡단보도', english: 'Crosswalk' }
  ],
  health: [
    { korean: '기분', english: 'Feeling / mood' },
    { korean: '눈물', english: 'Tear' },
    { korean: '눕다', english: 'Lie down' },
    { korean: '다리', english: 'Leg / bridge' },
    { korean: '땀', english: 'Sweat' },
    { korean: '마음', english: 'Mind / heart' },
    { korean: '면도', english: 'Shaving / razor' },
    { korean: '목욕', english: 'Bath' },
    { korean: '목욕하다', english: 'Take a bath' },
    { korean: '몸살', english: 'Body aches' },
    { korean: '배', english: 'Stomach' },
    { korean: '병', english: 'Illness' },
    { korean: '병원', english: 'Hospital' },
    { korean: '비누', english: 'Soap' },
    { korean: '소화제', english: 'Digestive medicine' },
    { korean: '세수하다', english: 'Wash up' },
    { korean: '손수건', english: 'Handkerchief' },
    { korean: '수건', english: 'Towel' },
    { korean: '수술하다', english: 'Have surgery' },
    { korean: '쉬다', english: 'Rest' },
    { korean: '스트레스', english: 'Stress' },
    { korean: '씻다', english: 'Wash' },
    { korean: '의사', english: 'Doctor' },
    { korean: '입', english: 'Mouth' },
    { korean: '이', english: 'Tooth' },
    { korean: '치료하다', english: 'Treat / cure' },
    { korean: '콧물', english: 'Runny nose' },
    { korean: '피곤하다', english: 'Tired' },
    { korean: '허리', english: 'Waist / lower back' },
    { korean: '환자', english: 'Patient' }
  ],
  exercise: [
    { korean: '공원', english: 'Park' },
    { korean: '경기장', english: 'Stadium' },
    { korean: '대회', english: 'Competition' },
    { korean: '등산복', english: 'Hiking clothes' },
    { korean: '등산화', english: 'Hiking boots' },
    { korean: '뛰다', english: 'Run' },
    { korean: '수영복', english: 'Swimsuit' },
    { korean: '시합', english: 'Match / contest' },
    { korean: '연습하다', english: 'Practice' },
    { korean: '운동복', english: 'Sportswear' },
    { korean: '자전거', english: 'Bicycle' },
    { korean: '지다', english: 'Lose' },
    { korean: '팀', english: 'Team' },
    { korean: '테니스', english: 'Tennis' },
    { korean: '피곤하다', english: 'Tired' },
    { korean: '힘', english: 'Strength' },
    { korean: '힘들다', english: 'Difficult / tiring' },
    { korean: '쉬다', english: 'Rest' },
    { korean: '빠르다', english: 'Fast' },
    { korean: '느리다', english: 'Slow' },
    { korean: '걷다', english: 'Walk' },
    { korean: '몸', english: 'Body' },
    { korean: '건강하다', english: 'Be healthy' },
    { korean: '활동', english: 'Activity' },
    { korean: '취미', english: 'Hobby' },
    { korean: '소풍', english: 'Picnic / trip' },
    { korean: '낚시', english: 'Fishing' },
    { korean: '춤', english: 'Dance' },
    { korean: '춤추다', english: 'Dance' },
    { korean: '노래하다', english: 'Sing' },
    { korean: '배구', english: 'Volleyball' }
  ],
  weatherTime: [
    { korean: '겨울방학', english: 'Winter vacation' },
    { korean: '그날', english: 'That day' },
    { korean: '그동안', english: 'Meanwhile / during that time' },
    { korean: '그저께', english: 'Day before yesterday' },
    { korean: '금방', english: 'Soon / a moment ago' },
    { korean: '기간', english: 'Period / term' },
    { korean: '기온', english: 'Temperature' },
    { korean: '날', english: 'Day' },
    { korean: '년', english: 'Year' },
    { korean: '다음해', english: 'Next year' },
    { korean: '달', english: 'Month / moon' },
    { korean: '때', english: 'Time / occasion' },
    { korean: '매일', english: 'Every day' },
    { korean: '매주', english: 'Every week' },
    { korean: '며칠', english: 'A few days / what date' },
    { korean: '모레', english: 'Day after tomorrow' },
    { korean: '목요일', english: 'Thursday' },
    { korean: '밤', english: 'Night' },
    { korean: '방학', english: 'School vacation' },
    { korean: '새벽', english: 'Dawn' },
    { korean: '수요일', english: 'Wednesday' },
    { korean: '시간표', english: 'Timetable / schedule' },
    { korean: '시계', english: 'Clock / watch' },
    { korean: '십이월', english: 'December' },
    { korean: '십일월', english: 'November' },
    { korean: '아까', english: 'A little while ago' },
    { korean: '아침', english: 'Morning / breakfast' },
    { korean: '오늘', english: 'Today' },
    { korean: '오전', english: 'Morning / A.M.' },
    { korean: '오후', english: 'Afternoon / P.M.' }
  ],
  shopping: [
    { korean: '계산', english: 'Calculation / payment' },
    { korean: '구경하다', english: 'Look around' },
    { korean: '금액', english: 'Amount of money' },
    { korean: '넣다', english: 'Put in' },
    { korean: '매다', english: 'Tie' },
    { korean: '메다', english: 'Carry on shoulder' },
    { korean: '모자', english: 'Hat' },
    { korean: '목걸이', english: 'Necklace' },
    { korean: '무료', english: 'Free of charge' },
    { korean: '바지', english: 'Pants' },
    { korean: '반지', english: 'Ring' },
    { korean: '비싸다', english: 'Expensive' },
    { korean: '사이즈', english: 'Size' },
    { korean: '색', english: 'Color' },
    { korean: '세일하다', english: 'Have a sale' },
    { korean: '스웨터', english: 'Sweater' },
    { korean: '스타킹', english: 'Stockings' },
    { korean: '신다', english: 'Put on shoes' },
    { korean: '신발', english: 'Shoes' },
    { korean: '옷', english: 'Clothes' },
    { korean: '원', english: 'Won' },
    { korean: '입다', english: 'Wear' },
    { korean: '장갑', english: 'Gloves' },
    { korean: '지갑', english: 'Wallet' },
    { korean: '치마', english: 'Skirt' },
    { korean: '카드', english: 'Card' },
    { korean: '팔찌', english: 'Bracelet' },
    { korean: '편의점', english: 'Convenience store' },
    { korean: '현금', english: 'Cash' },
    { korean: '화장품', english: 'Cosmetics' }
  ],
  colorsNumbers: [
    { korean: '까맣다', english: 'Black' },
    { korean: '노랗다', english: 'Yellow' },
    { korean: '빨갛다', english: 'Red' },
    { korean: '파랗다', english: 'Blue' },
    { korean: '하얗다', english: 'White' },
    { korean: '색', english: 'Color' },
    { korean: '첫째', english: 'First' },
    { korean: '둘째', english: 'Second' },
    { korean: '셋째', english: 'Third' },
    { korean: '스물', english: 'Twenty' },
    { korean: '서른', english: 'Thirty' },
    { korean: '마흔', english: 'Forty' },
    { korean: '쉰', english: 'Fifty' },
    { korean: '예순', english: 'Sixty' },
    { korean: '일흔', english: 'Seventy' },
    { korean: '여든', english: 'Eighty' },
    { korean: '아흔', english: 'Ninety' },
    { korean: '일', english: 'One' },
    { korean: '이', english: 'Two' },
    { korean: '삼', english: 'Three' },
    { korean: '사', english: 'Four' },
    { korean: '오', english: 'Five' },
    { korean: '육', english: 'Six' },
    { korean: '칠', english: 'Seven' },
    { korean: '팔', english: 'Eight' },
    { korean: '십', english: 'Ten' },
    { korean: '백', english: 'Hundred' },
    { korean: '천', english: 'Thousand' },
    { korean: '만', english: 'Ten thousand' },
    { korean: '반', english: 'Half' }
  ],
  homeObjects: [
    { korean: '디브이디', english: 'DVD' },
    { korean: '라디오', english: 'Radio' },
    { korean: '로션', english: 'Lotion' },
    { korean: '메모', english: 'Memo' },
    { korean: '물건', english: 'Thing / object' },
    { korean: '비누', english: 'Soap' },
    { korean: '사진', english: 'Photo' },
    { korean: '상자', english: 'Box' },
    { korean: '수건', english: 'Towel' },
    { korean: '숟가락', english: 'Spoon' },
    { korean: '시계', english: 'Clock / watch' },
    { korean: '신문', english: 'Newspaper' },
    { korean: '쓰레기', english: 'Garbage' },
    { korean: '열쇠', english: 'Key' },
    { korean: '옷', english: 'Clothes' },
    { korean: '우산', english: 'Umbrella' },
    { korean: '전화', english: 'Telephone' },
    { korean: '컴퓨터', english: 'Computer' },
    { korean: '텔레비전', english: 'Television' },
    { korean: '휴대폰', english: 'Cell phone' },
    { korean: '가스레인지', english: 'Gas stove' },
    { korean: '베개', english: 'Pillow' },
    { korean: '이불', english: 'Blanket' },
    { korean: '책', english: 'Book' },
    { korean: '칫솔', english: 'Toothbrush' },
    { korean: '치약', english: 'Toothpaste' },
    { korean: '컵', english: 'Cup' },
    { korean: '칼', english: 'Knife' },
    { korean: '프린터', english: 'Printer' },
    { korean: '휴지', english: 'Tissue / toilet paper' }
  ],
  animalsNature: [
    { korean: '경치', english: 'Scenery' },
    { korean: '곱다', english: 'Beautiful' },
    { korean: '기르다', english: 'Raise / grow' },
    { korean: '나라', english: 'Country' },
    { korean: '남미', english: 'South America' },
    { korean: '남북', english: 'North and south' },
    { korean: '동쪽', english: 'East' },
    { korean: '들', english: 'Field' },
    { korean: '마리', english: 'Animal counter' },
    { korean: '말', english: 'Horse' },
    { korean: '물고기', english: 'Fish' },
    { korean: '바람', english: 'Wind' },
    { korean: '봄', english: 'Spring' },
    { korean: '북쪽', english: 'North' },
    { korean: '비', english: 'Rain' },
    { korean: '새', english: 'Bird' },
    { korean: '섬', english: 'Island' },
    { korean: '세계', english: 'World' },
    { korean: '소리', english: 'Sound' },
    { korean: '숲', english: 'Forest' },
    { korean: '식물', english: 'Plant' },
    { korean: '여름', english: 'Summer' },
    { korean: '오른쪽', english: 'Right side' },
    { korean: '왼쪽', english: 'Left side' },
    { korean: '위', english: 'Up / above' },
    { korean: '지도', english: 'Map' },
    { korean: '하늘', english: 'Sky' },
    { korean: '해', english: 'Sun' },
    { korean: '호수', english: 'Lake' },
    { korean: '흐리다', english: 'Cloudy' },
    { korean: '바닷가', english: 'Beach' },
    { korean: '벚꽃', english: 'Cherry blossom' },
    { korean: '서쪽', english: 'West' },
    { korean: '무궁화', english: 'Rose of Sharon' }
  ]
};

function addExtraTopicWords() {
  Object.entries(extraTopicWords).forEach(([topic, words]) => {
    const set = topicSets[topic];
    const existing = new Set(set.words.map((word) => word.korean));
    const additions = words
      .filter((word) => !existing.has(word.korean))
      .slice(0, 50 - set.words.length);

    set.words.push(...additions);
  });
}

function romanizeHangul(value) {
  const initial = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
  const medial = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
  const final = ['', 'k', 'k', 'ks', 'n', 'nj', 'nh', 't', 'l', 'lk', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'p', 'ps', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't'];

  return Array.from(value).map((char) => {
    const code = char.charCodeAt(0) - 44032;

    if (code < 0 || code > 11171) {
      return char.toLowerCase();
    }

    const jong = code % 28;
    const jung = ((code - jong) / 28) % 21;
    const cho = Math.floor(code / 588);

    return `${initial[cho]}${medial[jung]}${final[jong]}`;
  }).join('');
}

addExtraTopicWords();
Object.values(topicSets).forEach((set) => {
  set.words.forEach((word) => {
    word.romanization = word.romanization || romanizeHangul(word.korean);
  });
});

let activeTopic = 'basics';
let isChallengeMode = false;
let challengeQuestionCount = 0;
const challengeWords = Object.values(topicSets).flatMap((set) => set.words.map((word) => ({ ...word, topic: set.label })));
let currentIndex = 0;
let score = 0;
let streak = 0;
let mode = 'meaning';
let audioContext;

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

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  audioContext = audioContext || new AudioContextClass();

  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  return audioContext;
}

function playToneSequence(notes) {
  const context = getAudioContext();

  if (!context) {
    return;
  }

  const now = context.currentTime;

  notes.forEach(({ frequency, start, duration }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startTime = now + start;
    const endTime = startTime + duration;

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, endTime);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime);
    oscillator.stop(endTime + 0.02);
  });
}

function playCorrectSound() {
  playToneSequence([
    { frequency: 523.25, start: 0, duration: 0.11 },
    { frequency: 659.25, start: 0.1, duration: 0.12 },
    { frequency: 783.99, start: 0.21, duration: 0.16 }
  ]);
}

function playWrongSound() {
  playToneSequence([
    { frequency: 196, start: 0, duration: 0.14 },
    { frequency: 146.83, start: 0.13, duration: 0.18 }
  ]);
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
    renderTopics();
    return;
  }

  const set = getActiveSet();

  topicEyebrow.textContent = `${set.label} set`;
  lessonTitle.textContent = set.label;
  lessonDescription.textContent = `${set.description} ${set.words.length} words.`;
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
    playCorrectSound();
    score += 10;
    streak += 1;
    setFeedback(`Correct: ${word.korean} means ${word.english}.`, 'correct');
    window.setTimeout(nextQuestion, 700);
    return;
  }

  playWrongSound();
  streak = 0;
  score = isChallengeMode ? 0 : Math.max(0, score - 2);
  streakDisplay.textContent = `${streak} streak`;
  scoreDisplay.textContent = score;
  setFeedback(isChallengeMode ? `Challenge reset. Answer: ${word.korean} (${word.romanization}).` : `Try again. Answer: ${word.korean} (${word.romanization}).`, 'wrong');
  answerInput.select();
});

skipButton.addEventListener('click', () => {
  const word = getCurrentWord();
  playWrongSound();
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
