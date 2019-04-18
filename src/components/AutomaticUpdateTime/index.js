import { Component } from 'react'
import moment from 'moment'

// TODO: 可以做成HOC组件，传入 timestamp，
// 对比当前时间与传入时间的差值，计算出下一次大约何时去执行。
// 如差值为：1235 时是千位，所以1s后再更新
// 只需一个定时器即可，单例模式

var listeners = []
function runTimer() {
  setTimeout(() => {
    for (let cb of listeners) {
      cb()
    }

    runTimer()
  }, 2000)
}

function addTimerListener(cb) {
  listeners.push(cb)

  return function removeListener() {
    listeners = listeners.filter(_cb => _cb !== cb)
  }
}

runTimer()

export default class extends Component {
  componentDidMount() {
    addTimerListener(this.forceUpdate.bind(this))
  }

  render() {
    return moment(this.props.time).fromNow()
  }
}
