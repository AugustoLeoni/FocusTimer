export default function () {
  const forestAudio = new Audio('../sound/Floresta.wav')
  const rainAudio = new Audio('../sound/Chuva.wav')
  const coffeeShopAudio = new Audio('../sound/Cafeteria.wav')
  const fireplaceAudio = new Audio('../sound/Lareira.wav')

  function pressButtonForestAudio() {
    forestAudio.play()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()

    forestAudio.loop = true
  }

  function pressButtonRainAudio() {
    forestAudio.pause()
    rainAudio.play()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  
    rainAudio.loop = true
  }

  function pressButtonCoffeeShopAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.play()
    fireplaceAudio.pause()
  
    coffeeShopAudio.loop = true
  }

  function pressButtonFireplaceAudio() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.play()
  
    fireplaceAudio.loop = true
  }

  return {
    pressButtonForestAudio,
    pressButtonRainAudio,
    pressButtonCoffeeShopAudio,
    pressButtonFireplaceAudio
  }
}