export const questions = [
    {
        number: '01',
        question: '어? 이 차 관심있었는데 인터넷에선<br>평이 안좋네... 어떡하지?',
        choices: [
            { text: '일단 전시장 방문해서 시승해보자!', value: 's' },
            { text: '알빠야? 내가 맘에 드는데?<br>바로 계약금 걸어!', value: 'n' }
        ]
    },
    {
        number: '02',
        question: '위치가 애매해서 차를 타고 가야겠어.<br>주차장이 있나?',
        choices: [
            { text: '주차장 앱을 켜서 최저가 주차장을 찾아본다.', value: 'j' },
            { text: '에이~ 주차장 하나 없겠어?<br>바로 키를 챙긴다.', value: 'p' }
        ]
    },
    {
        number: '03',
        question: '인생 첫 차를 뽑았다!<br>나는?',
        choices: [
            { text: '친구, 직장동료, 인스타 스토리/피드<br>상관없이 다 말한다.', value: 'e' },
            { text: '친한 친구에게만 지나가듯이 이야기한다.', value: 'i' }
        ]
    },
    {
        number: '04',
        question: '제주도 여행 계획이 잡혔다<br>어떤 차를 빌려볼까?',
        choices: [
            { text: '제주도는 오픈 에어링이지!<br>포드 머스탱 컨버터블', value: 'p' },
            { text: '전기차의 섬 제주니까 전기차 한 번 타볼까?<br>BMW I4', value: 'j' }
        ]
    },
    {
        number: '05',
        question: '친구가 교통사고가 났다고 전화했다.<br>나의 반응은?',
        choices: [
            { text: '괜찮아? 히에엑! 교통사고?<br>몸은! 안다쳤어?', value: 'f' },
            { text: '교통사고? 보험은 불렀어?<br>병원에선 뭐래? 과실은?', value: 't' }
        ]
    },
    {
        number: '06',
        question: "나에게 '좋은 자동차'의 조건은?",
        choices: [
            { text: '자동차의 기본기, 좋은 성능, 주행시 느낌', value: 't' },
            { text: '여러가지 기능, 감성 품질, 자동차의 브랜드', value: 'f' }
        ]
    },
    {
        number: '07',
        question: '초라한 나의 차... 튜닝을 해보자!<br>어디부터 시작할까?',
        choices: [
            { text: '짜세가 먼저지!<br>익스테리어 파츠부터 달아본다.', value: 'e' },
            { text: '극한의 퍼포먼스!<br>흡배기 부터 만져본다.', value: 'i' }
        ]
    },
    {
        number: '08',
        question: '눈 앞에 멋진 페라리가 한 대 서있습니다.<br>무슨 생각이 드시나요?',
        choices: [
            { text: '812 슈퍼패스트군...<br>6.5리터 V12엔진, 800마력, 73.3kg.m...', value: 's' },
            { text: '와! 슈퍼패스트!<br>캬 배기음 죽여주겠지? 차주는 어떤 사람일까?', value: 'n' }
        ]
    },
    {
        number: '09',
        question: '드디어 내 드림카 OOO를 구매하게 되었다!<br>나는...',
        choices: [
            { text: '옵션표 좌라락 뽑아서 완벽한 조합을 짜놓고<br>구매방식까지 분석 후 당당히 전시장 입성.', value: 'j' },
            { text: '일단 전시장에 간다.<br>딜러와의 마라톤 미팅 후에 계약서에 사인한다.', value: 'p' }
        ]
    },
    {
        number: '10',
        question: '즐거운 친구들과의 여행!<br>나는 목적지까지',
        choices: [
            { text: '한 차로 가야 재밌지!<br>얘기도 많이 하고! 음악도 빵빵하게 틀고!', value: 'e' },
            { text: '각자 차로 이동하자~<br>내가 좋아하는 노래 들으면서 편안하게 가고싶어.', value: 'i' }
        ]
    },
    {
        number: '11',
        question: '자고 일어났더니 출퇴근용 애마가 포르쉐로 바뀌어 있었다.<br>이때 나는',
        choices: [
            { text: '이게 무슨...<br>(글러브 박스에서 자동차 등록증을 찾아본다)', value: 's' },
            { text: '오! 땡쓰 갓! 열심히 살았더니 이런 일도 생기네.<br>(바로 시동을 걸어본다)', value: 'n' }
        ]
    },
    {
        number: '12',
        question: '당신이 공들여 튜닝한 애마<br>누군가 나지막이 양카라고 얘기하며 지나간다.',
        choices: [
            { text: '참나... 어이없어!<br>싫어하든지 말든지! 알빠야?', value: 't' },
            { text: '(일단마상)양카...? 따흐흑...<br>왜 싫어하지... 다른차 알아봐야 되나...', value: 'f' }
        ]
    },
]
export const results = [
    {
        // mbti: 'ESTP',
        title: '신박한게 좋아!<br>자동차 얼리어답터',
        carimage: '/chabti/images/plaid.png',
        car: '테슬라 모델S 플래드',
        options: '요크핸들, FSD, 팔콘윙도어, 디지털 사이드미러...<br>기타등등 수만가지 최신 옵션',
        results:
            '신차 눈독들이고 있다가 시승기 올라오는거 꼬박꼬박 다 챙겨보는 당신!<br>\
            가끔 신박한 옵션이 있는 차가 등장하면 견적을 슬금슬금 뽑아보지 않나요?<br>\
            인스타에 신상 카페가 올라오면 드라이브 가는걸 좋아해요.<br>\
            경쟁심이 있어서 조수석 친구에게 운전 못한다는 소리를 들으면 은근히 화내요.',
        passangers: ['인생은 즐겁게!<br>흥부자 드라이버', '그럴 수 있지~<br>도로위의 성인군자']
    },
    {
        // mbti: 'ISTP',
        title: '과...관성 드리프트?!<br>드라이빙 마스터',
        carimage: '/chabti/images/m4.png',
        car: 'BMW M4',
        options: '후륜구동',
        results:
          '손재주가 뛰어나고 도구를 능숙하게 다루기 때문에 운전실력도 좋아요.<br>\
          스릴 넘치는 드리프트를 완벽하게 해냈을 때 희열을 느껴요.<br>\
          타인에게 무관심하기 때문에 가까운 사람 말고는 자신의 차에 잘 태우지 않아요.<br>\
          DIY에 관심이 많아서 차의 여기저기에 차주의 손길이 닿아있어요.',
        passangers: ['귀찮으니깐 끝판왕 하나만 주세요.<br>엄격한 귀차니스트', '인생은 즐겁게!<br>흥부자 드라이버']
    },
    {
        // mbti: 'ESFP',
        title: '가솔린과 컨버터블만 있다면 어디든 갈 수 있어.<br>낭만 드라이버',
        carimage: '/chabti/images/roma.png',
        car: '페라리 로마 스파이더',
        options: '머리위로 펼쳐진 하늘',
        results:
          '자유분방하고 열정적인 당신!<br>\
          조수석의 연인에게 드라이빙의 기쁨을 가져다 주기엔 컨버터블이 딱이죠!<br>\
          사람들과 대화하는걸 좋아해서 차를 살 때 여러사람에게 물어보는 편이에요.<br>\
          남들이 해주는 조언에 귀가 팔랑거리지만 결국 내가 원했던 차를 가지게 돼요.',
        passangers: ['귀찮으니깐 끝판왕 하나만 주세요.<br>엄격한 귀차니스트', '겉은 차갑지만 속은 따뜻한.<br>사색적인 드라이버']
    },
    {
        // mbti: 'ISFP',
        title: '그럴 수 있지~<br>도로위의 성인군자',
        carimage: '/chabti/images/s90.png',
        car: '볼보 S90',
        options: '핸들과 가까이 있는 비상등 스위치',
        results:
          '온화한 성격을 지닌 당신~<br>\
          깜빡이를 안 킨 차가 칼치기로 들어와도 속으로 욕하고 그러려니 넘어가요~<br>\
          뒷좌석 승객들의 요구를 잘들어줘요.<br>그런데 프라이버시를 중요시 여겨서 트렁크 속을 보여주진 않을거 같아요~<br>\
          은근히 우유부단해서 차의 색상은 왠지 흰색일 것 같아요~',
        passangers: ['가솔린과 컨버터블만 있다면<br>어디든 갈 수 있어.<br>낭만 드라이버', '꽉 찬 트렁크는 연비에 좋지 않습니다.<br>그런데 꼭 필요한.<br>맥시멀리스트 드라이버']
    },
    {
        // mbti: 'ESTJ',
        title: '귀찮으니깐 끝판왕 하나만 주세요.<br>엄격한 귀차니스트',
        carimage: '/chabti/images/sclass.png',
        car: '메르세데스 벤츠 S 클래스',
        options: '애플 카플레이, 안드로이드 오토',
        results:
          '운전하는 행위에 대해 관심이 없는 당신.<br>\
          막힌 도로를 싫어해서 무조건 최단거리, 최소시간 루트로 이동해요.<br>\
          운전은 관심 없지만 차량 관리에는 심혈을 기울여서 차계부는 필수에요.<br>\
          눈에 띄는걸 싫어해서 차량 색상은 무채색을 선호해요.',
        passangers: ['제가 모시겠습니다.<br>사교적인 드라이버', '난 나만의 길을 간다.<br>독고다이 드라이버']
    },
    {
        // mbti: 'ISTJ',
        title: '원 리 원 칙<br>FM 드라이버',
        carimage: '/chabti/images/911gt3.png',
        car: '포르쉐 911 GT3',
        options: '칼같은 핸들링',
        results:
          '갑작스러운 변화를 싫어해서 예상 가능한 움직임을 보여주는 차를 좋아해요.<br>\
          남들이 내 차에 뭐라 하는건 싫어하지만 은근히 내 차에 대해 잘난체를 해요.<br>\
          도로에서 방향지시등을 켜지 않거나 스텔스 차들을 보면 화가 치밀어 오르지만 속으로만 욕해요.<br>\
          운전하다가 실수하면 누구보다 빠르게 비상등을 켜요.',
        passangers: ['가솔린과 컨버터블만 있다면<br>어디든 갈 수 있어.<br>낭만 드라이버', '난 나만의 길을 간다.<br>독고다이 드라이버']
    },
    {
        // mbti: 'ESFJ',
        title: '제가 모시겠습니다.<br>사교적인 드라이버',
        carimage: '/chabti/images/vclass.png',
        car: '메르세데스 벤츠 V 클래스',
        options: '넓고 편안한 실내공간',
        results:
          '장거리 여행에 기꺼이 운전대를 잡는 당신!<br>\
          실내 온도는 최적온도, 선곡권은 ENFP에게 넘겨요.<br>\
          여러 사람과 온갖 이야기를 나누며 가다보니 금방 목적지에 도착해요.<br>\
          무사히 목적지에 도착해 뿌듯한 당신이지만 수고했다는 말을 듣지 못하면 내심 시무룩해져요.',
        passangers: ['꽉 찬 트렁크는 연비에 좋지 않습니다. 그런데 꼭 필요한.<br>맥시멀리스트 드라이버', '난 나만의 길을 간다.<br>독고다이 드라이버']
    },
    {
        // mbti: 'ISFJ',
        title: '꽉 찬 트렁크는 연비에 좋지 않습니다. 그런데 꼭 필요한.<br>맥시멀리스트 드라이버',
        carimage: '/chabti/images/escalade.png',
        car: '캐딜락 에스컬레이드 ESV',
        options: '광활한 트렁크',
        results:
          '따뜻하고 헌신적인 성격이라 여행갈때 이것저것 다 챙겨서 가는 스타일이에요. 운전수가 되는 것도 기꺼이 받아들여요.<br>\
          목적지까지 대화하면서 이동하는 ESFJ와는 달리 묵묵히 운전만 하면서 이동해요.<br>\
          여러 사람이 있으면 기가 빨리기 때문에 4명 이상은 잘 태우지 않아요.<br>\
          3열이 아깝다구요? 3열은 접어놔야죠. 트렁크가 모자라니깐.',
        passangers: ['신박한게 좋아!<br>자동차 얼리어답터', '부들부들...<br>불의를 보면 참을 수 없다.<br>정의로운 드라이버']
    },
    {
        // mbti: 'ENTJ',
        title: '오늘은 저 산을 정복해볼까?<br>열정적인 리더 드라이버',
        carimage: '/chabti/images/grenadier.png',
        car: '이네오스 그레나디어',
        options: '강력한 4X4 구동계',
        results:
          '리더의 성격을 가지고 있어서 운전대 잡는걸 좋아해요.<br>\
          매일 같은 루트로 가는 걸 지루해 하고 새로운 도로, 험로를 만나면 정복할 생각에 두근거려요.<br>\
          실패하면 계속 도전하는 스타일로 주변 조언을 기꺼이 수용하며 최적의 루트를 찾아내요.',
        passangers: ['난 나만의 길을 간다.<br>독고다이 드라이버', '없음']
    },
    {
        // mbti: 'INTJ',
        title: '남들 시선 알빠야?<br>마이웨이 드라이버',
        carimage: '/chabti/images/rs6.png',
        car: '아우디 RS6 아반트',
        options: '남들과는 다른 스타일',
        results:
          '독립적인 성격과 독창적인 아이디어가 반짝이는 당신!<br>\
          차를 고를때 꽂힌 구석이 있으면 남들의 시선따윈 신경쓰지 않고 바로 계약해버려요.<br>\
          아! 물론 공식홈페이지, 제원표, 시승기, 유튜브 모두 찾아보고 결정한답니다.<br>\
          일관성 있는 성격이라 차에 쓰레기라는건 존재하지 않고 항상 깨끗해요.',
        passangers: ['인생은 즐겁게!<br>흥부자 드라이버', '꽉 찬 트렁크는 연비에 좋지 않습니다. 그런데 꼭 필요한.<br>맥시멀리스트 드라이버']
    },
    {
        // mbti: 'ENTP',
        title: '음... 그래요? 그런데 저는 좀 다르게 생각해요.<br>혁명적인 드라이버',
        carimage: '/chabti/images/huracan.png',
        car: '람보르기니 우라칸 스테라토',
        options: '오프로드를 갈 수 있는 슈퍼카',
        results:
          '기존의 상식을 타파하는 당신!<br>\
          남들이 "왜 이차를 골랐어?"라고 물어볼 때 자신의 생각을 거침없이 말하지만 조금 모순적인 부분이 있어요.<br>\
          지인이 차를 살 때 옆에서 여러 종류의 차들을 추천해요.<br>\
          모험심이 강해 새로운 곳으로 여행을 떠나는걸 좋아해요.',
        passangers: ['겉은 차갑지만 속은 따뜻한.<br>사색적인 드라이버', '논리, 분석, 사고.<br>너드 드라이버']
    },
    {
        // mbti: 'INTP',
        title: '논리, 분석, 사고.<br>너드 드라이버',
        carimage: '/chabti/images/gtr.png',
        car: '닛산 GT-R 니스모',
        options: '제로백, 랩타임, 기타등등 수치들을 보여주는 온보드 컴퓨터,<br>조절식 서스펜션',
        results:
          '자동차를 구매할 때 제원표, 옵션표들을 유심히 들여다 봐요. 그런데 은근 게을러서 선택할때 시간이 좀 걸려요.<br>\
          논리적으로 내 마음에 든 차가 있으면 남의 의견엔 관심이 없어요.<br>\
          그런데 왜 골랐냐고 물어보면 논리적으로 말이 잘 안나와요.<br>\
          시작하면 끝을 보는 스타일이라 자동차 성능 튜닝에 관심이 많아요.',
        passangers: ['오늘은 저 산을 정복해볼까?<br>열정적인 리더 드라이버', '음... 그래요?<br>그런데 저는 좀 다르게 생각해요.<br>혁명적인 드라이버']
    },
    {
        // mbti: 'ENFJ',
        title: '부들부들... 불의를 보면 참을 수 없다.<br>정의로운 드라이버',
        carimage: '/chabti/images/polestar2.png',
        car: '폴스타 2',
        options: '친환경 재생 소재를 많이 쓴 인테리어',
        results:
          '사회 현상, 환경에 관심이 많아서 재활용 소재를 많이 쓴 전기차로 일찍이 바꿨어요.<br>\
          배려심이 많아 양보운전을 실천해요. 난폭운전을 보면 스마트국민제보로 바로 신고넣어요.<br>\
          지인이 난폭운전을 당했을 때 내가 더 분해서 대신 화내줘요.<br>\
          그래서 오지랖 넓다는 소리를 종종 듣는답니다.',
        passangers: ['난 나만의 길을 간다.<br>독고다이 드라이버', '제가 모시겠습니다.<br>사교적인 드라이버']
    },
    {
        // mbti: 'INFJ',
        title: '겉은 차갑지만 속은 따뜻한.<br>사색적인 드라이버',
        carimage: '/chabti/images/xc60.png',
        car: '볼보 XC60',
        options: '편안한 인테리어, 좋은 오디오 시스템',
        results:
          '생각이 많아서 차량 구매할 때 시간이 걸리는 편이에요.<br>\
          혼자 사색하는 시간을 즐겨서 홀로 드라이빙 하는 시간이 많아요.<br>\
          남을 태우는 일이 적어서 큰 차보단 적당한 크기의 편안한 차를 선호해요.<br>\
          감수성이 풍부해 잔잔한 음악들으며 드라이브 하는걸 즐기기 때문에 오디오 시스템이 좋은 차를 좋아한답니다.',
        passangers: ['인생은 즐겁게!<br>흥부자 드라이버', '귀찮으니깐 끝판왕 하나만 주세요.<br>엄격한 귀차니스트']
    },
    {
        // mbti: 'ENFP',
        title: '인생은 즐겁게!<br>흥부자 드라이버',
        carimage: '/chabti/images/bentayga.png',
        car: '벤틀리 벤테이가',
        options: '빵빵한 스피커, 독특한 색상',
        results:
          '남다르게 흥이 넘치는 당신!<br>여행길이든 출퇴근길이든 음악이 없는 드라이브는 상상할 수 없어요.<br>\
          휴지를 찾으려고 글로브 박스를 열어보면 블루투스 마이크가 덩그러니 있어요.<br>\
          두루두루 잘 지내는게 좋다고 생각해 서먹서먹한 사람이 태워달라고 하면 거절을 못하는 편이에요. \
          하지만 생색은 조금 내는 편이랍니다.',
        passangers: ['그럴 수 있지~<br>도로위의 성인군자', '귀찮으니깐 끝판왕 하나만 주세요.<br>엄격한 귀차니스트']
    },
    {
        // mbti: 'INFP',
        title: '난 나만의 길을 간다.<br>독고다이 드라이버',
        carimage: '/chabti/images/mc20.png',
        car: '마세라티 MC20',
        options: '2인승, 희소성',
        results:
          '차를 구매할때 남들의 의견보다 나만의 확고한 기준을 따라 구매해요.<br>또, 남에게 간섭도 잘 하지 않아요.<br>\
          차 안에도 남들은 이해 못하지만 내가 아끼는 나만의 액세서리가 하나쯤 있어요.<br>\
          독고다이이지만 너그러워서 동승자가 차에 타서 이것저것 만져도 크게 나무라지 않아요.<br>\
          하지만 얌체운전자를 만나면 속으로 궁시렁궁시렁 거리는 스타일이에요.',
        passangers: ['부들부들...<br>불의를 보면 참을 수 없다.<br>정의로운 드라이버', '신박한게 좋아!<br>자동차 얼리어답터']
    },
]
export const mbtis = {
    ESTP: 0,
    ISTP: 1,
    ESFP: 2,
    ISFP: 3,
    ESTJ: 4,
    ISTJ: 5,
    ESFJ: 6,
    ISFJ: 7,
    ENTJ: 8,
    INTJ: 9,
    ENTP: 10,
    INTP: 11,
    ENFJ: 12,
    INFJ: 13,
    ENFP: 14,
    INFP: 15
}
