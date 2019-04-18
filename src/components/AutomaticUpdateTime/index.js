import { Component } from 'react'
import moment from 'moment'

moment.localeData('en')._relativeTime.s = "just now"
moment.relativeTimeThreshold('ss', 3)

export default class extends Component {
  calNextUpateTime() {
    const fromNow = Date.now() - this.props.time
    const sec = 1000
    const min = sec * 60
    const hour = min * 60

    // refer http://momentjs.com/docs/#/displaying/fromnow/
    // < 45s  (a few seconds ago)
    if (fromNow / sec < 45) {
      // NOTE: 每秒钟的频率仅为演示，真实环境中应大于1min
      return fromNow % sec // Update every second
    }
    // < 90s  (a minute ago)
    if (fromNow / sec < 90) {
      return (90 - fromNow / sec) * sec
    }
    // < 45min  (x minutes ago)
    if (fromNow / min < 45) {
      return fromNow % min // Update every minute
    }
    // < 90min  (an hour ago)
    if (fromNow / min < 90) {
      return (90 - fromNow / min) * min
    }
    // < 21hours  (x hours ago)
    if (fromNow / hour < 21) {
      return fromNow % hour // Update every hours
    }

    // NOTE: 页面保持1小时以上的情况较少，忽略大于21小时的更新
    return undefined
  }

  shouldComponentUpdate() {
    return false
  }

  runTimer() {
    const delay = this.calNextUpateTime()

    if (delay) {
      this.timer = setTimeout(() => {
        this.timer && clearTimeout(this.timer)
        this.forceUpdate()
        this.runTimer()
      }, delay)
    }
  }

  componentDidMount() {
    this.runTimer()
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return moment(this.props.time).fromNow()
  }
}
