import React, { Component } from 'react'
import classnames from 'classnames'
import { Transition } from 'react-transition-group'
import styles from './moreBtn.module.scss'

const isMobi = 'ontouchstart' in window

export default class MoreBtn extends Component {
  state = {
    showLayer: false
  }

  $layer = React.createRef()
  $moreBtn = React.createRef()
  $heartIcon = React.createRef()

  toggleLayer = () => {
    this.setState({
      showLayer: !this.state.showLayer
    })
  }

  globalClickHanler = evt => {
    const internelEvt = [this.$layer, this.$moreBtn]
      .some($el => $el.current.contains(evt.target))

    if (!internelEvt) {
      this.toggleLayer()
    }
  }

  likeHandler = event => {
    const that = this
    const $icon = this.$heartIcon.current
    const $heart = $icon.cloneNode(true)

    $icon.addEventListener('webkitAnimationEnd', function listener() {
      $icon.removeEventListener('webkitAnimationEnd', listener)
      $heart.remove()
    })

    that.props.likeHandler()
    $heart.classList.add(styles.heartbeat)
    $icon.append($heart)
  }

  bindGlobalEvent = () => {
    const evtName = isMobi ? 'touchstart' : 'click'
    window.addEventListener(evtName, this.globalClickHanler)

    this.unbindGlobalEvent = () => {
      window.removeEventListener(evtName, this.globalClickHanler)
      this.unbindGlobalEvent = null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { showLayer } = this.state

    if (showLayer !== prevState.showLayer) {
      showLayer ? this.bindGlobalEvent() : this.unbindGlobalEvent()
    }

    if (showLayer && prevProps.post.liked !== this.props.post.liked) {
      // Delay execution
      // TODO: ensure heartbeat animation has completed
      setTimeout(this.toggleLayer, 200)
    }
  }

  componentWillUnmount() {
    this.unbindGlobalEvent && this.unbindGlobalEvent()
  }

  render() {
    const { post } = this.props

    return (
      <div className={styles.wrap}>
        <Transition
          in={this.state.showLayer}
          timeout={{enter: 0, exit: 260}}
          unmountOnExit
          appear={true} >
          {
            state => (
              <div className={styles.layer} ref={this.$layer}>
                <div className={classnames(styles.btnGroup, state)}>
                  <div className={styles.btn} onClick={this.likeHandler}>
                    <i
                      className={classnames('iconfont', styles.icon, styles.heart)}
                      ref={this.$heartIcon}>&#xe64f;</i>
                    <span>{post.liked ? 'Cancel' : 'Like'}</span>
                  </div>
                  <div className={styles.sep}></div>
                  <div className={styles.btn} onClick={this.props.commentHandler}>
                    <i className={classnames('iconfont', styles.icon)}>&#xe6ca;</i>
                    <span>Comment</span>
                  </div>
                </div>
              </div>
            )
          }
        </Transition>
        <div
          className={styles.moreBtn}
          onClick={this.toggleLayer}
          ref={this.$moreBtn}>
          <i />
          <i />
        </div>
      </div>
    )
  }
}
