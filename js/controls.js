export default function Controls({
  forest,
  rain,
  coffeeShop,
  fireplace
}) {
  
  function forestAudioBg() {
    forest.classList.add('selected')
    rain.classList.remove('selected')
    coffeeShop.classList.remove('selected')
    fireplace.classList.remove('selected')
  }

  function rainAudioBg() {
    forest.classList.remove('selected')
    rain.classList.add('selected')
    coffeeShop.classList.remove('selected')
    fireplace.classList.remove('selected')
  }

  function coffeeShopAudioBg() {
    forest.classList.remove('selected')
    rain.classList.remove('selected')
    coffeeShop.classList.add('selected')
    fireplace.classList.remove('selected')
  }

  function fireplaceAudioBg() {
    forest.classList.remove('selected')
    rain.classList.remove('selected')
    coffeeShop.classList.remove('selected')
    fireplace.classList.add('selected')
  }

  return {
    forestAudioBg,
    rainAudioBg,
    coffeeShopAudioBg,
    fireplaceAudioBg
  }
}