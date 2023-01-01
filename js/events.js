import {
  timerDisplay,
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonDecTime,
  forest,
  rain,
  coffeeShop,
  fireplace
} from './elements.js'

export default function({controls, sound, timer}) {

  timerDisplay.addEventListener('click', function() {
    timer.display()
  })

  buttonPlay.addEventListener('click', function(){
    timer.countdown()
  })

  buttonPause.addEventListener('click', function(){
    timer.stopCountdown()
  })

  buttonAddTime.addEventListener('click', function(){
    timer.addTime()
  })

  buttonDecTime.addEventListener('click', function(){
    timer.decTime()
  })

  forest.addEventListener('click', function() {
    controls.forestAudioBg()
    sound.pressButtonForestAudio()
  })

  rain.addEventListener('click', function() {
    controls.rainAudioBg()
    sound.pressButtonRainAudio()
  })

  coffeeShop.addEventListener('click', function() {
    controls.coffeeShopAudioBg()
    sound.pressButtonCoffeeShopAudio()
  })

  fireplace.addEventListener('click', function() {
    controls.fireplaceAudioBg()
    sound.pressButtonFireplaceAudio()
  })
}