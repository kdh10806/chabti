import {results, mbtis} from './data.js'

// http://127.0.0.1:5500/results.html?mbti=ISFJ

const mbti = new URLSearchParams(location.search).get('mbti')
// console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const carImageEl = document.querySelector('.car-image')
const carEl = document.querySelector('.car-name')
const optionEl = document.querySelector('.car-option')
const contentEl = document.querySelector('.mbti-result')
const passangerEls = document.querySelectorAll('.passanger')

titleEl.innerHTML = result.title
carImageEl.src = result.carimage
carEl.innerHTML = result.car
optionEl.innerHTML = result.options
contentEl.innerHTML = result.results

passangerEls.forEach(function(passangerEl, index) {
    passangerEl.innerHTML = result.passangers[index]
})