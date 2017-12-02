/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import { fetchWeather } from '../../api'

export default class extends Phaser.State {
  init() {
    console.log(this.world)
  }
  preload() {
    console.log(this.world)
  }

  create() {
    const bannerText = 'Vue + Phaser + ES6 + Webpack'
    const banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom',
    })

    this.game.add.existing(this.mushroom)

    this.getWeather()
  }

  /**
   * Example for getting data from service
   */
  async getWeather() {
    const text = 'Service calling test...'
    const message = this.add.text(this.world.centerX, this.game.height - 150, text)
    message.anchor.setTo(0.5)
    try {
      const weather = await fetchWeather()
      message.setText(weather.data.name)
    } catch (err) {
      message.setText('Service calling test.... Get weather fail!')
      console.log(err.response)
    }
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
