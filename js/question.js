import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber+1) * 8.34 + '%'
}

function nextQuestion(choiceNumber) {
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    if(currentNumber === questions.length-1) {
        mbti = makeMbti(mbti)
        showResult()
        return
    }
    currentNumber += 1
    renderQuestion()
    
}

function makeMbti(tempMbti) {
    let eCount=0, nCount=0, fCount=0, pCount = 0;
    let newMbti = '';
    for (let i = 0; i < tempMbti.length; i++){
        if (tempMbti[i] !== 'e') continue;
        eCount++;
    }
    if (eCount > 1) {
        newMbti = newMbti + 'E';
    } else {
        newMbti = newMbti + 'I';
    }
    for (let i = 0; i < tempMbti.length; i++){
        if (tempMbti[i] !== 'n') continue;
        nCount++;
    }
    if (nCount > 1) {
        newMbti = newMbti + 'N';
    } else {
        newMbti = newMbti + 'S';
    }
    for (let i = 0; i < tempMbti.length; i++){
        if (tempMbti[i] !== 'f') continue;
        fCount++;
    }
    if (fCount > 1) {
        newMbti = newMbti + 'F';
    } else {
        newMbti = newMbti + 'T';
    }
    for (let i = 0; i < tempMbti.length; i++){
        if (tempMbti[i] !== 'p') continue;
        pCount++;
    }
    if (pCount > 1) {
        newMbti = newMbti + 'P';
    } else {
        newMbti = newMbti + 'J';
    }

    return newMbti;
}

function showResult() {
    location.href = '/result.html?mbti=' + mbti
}

choice1El.addEventListener('click', function() {
    nextQuestion(0)
})
choice2El.addEventListener('click', function() {
    nextQuestion(1)
})

renderQuestion()

