import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import * as actions from '../../store/actions'
import styles from './comments.module.scss'

function noop(evt) {
  evt.preventDefault()
}

class Comments extends Component {
  // TODO: optimize
  replyHandler = item => () => {
    if (item.user.id === this.props.profile.id) {
      if (window.confirm('TODO: ActionSheet 组件待实现')) {
        const action = actions.deleteComment(this.props.post.id, item.id)

        return this.props.dispatch(action)
      }
    }

    if (window.confirm('提示：模拟native输入法，即将插入新内容')) {
      const action = actions.creatComment(this.props.post.id, {
        content: `模拟native输入法，回复随机内容 - ${Math.random().toString(36).substr(2)}`,
        reply: item.user.id
      })

      this.props.dispatch(action)
    }
  }

  render() {
    const { likeList = [], comments = [] } = this.props.post
    const showCommentBox = !!(likeList.length || comments.length)

    if (!showCommentBox) {
      return null
    }

    return (
      <div
        className={classnames(styles.wrap)}>
        {!!likeList.length && (
          <div className={classnames(styles.likes, likeList.length && styles.show)}>
            <i className={classnames('iconfont', styles.icon)}>&#xe64f;</i>
            { likeList.map(d => (
              <a className={styles.item} key={d.id} href="//google.com" onClick={noop}>
                {d.user.name}
              </a>
            )) }
          </div>
        )}
        {
          !!comments.length && (
            <div className={classnames(styles.comments, comments.length && styles.show)}>
              { comments.map(item => (
                <div className={styles.item} key={item.id} onClick={this.replyHandler(item)}>
                  <div className={styles.head}>
                    <a
                      href="//g.cn"
                      onClick={noop}
                      className={styles.uname}>{item.user.name}</a>
                    {item.reply && (
                      <React.Fragment>
                        <span className={styles.at}>@</span>
                        <a
                          href="//g.cn"
                          onClick={noop}
                          className={styles.uname}>{item.reply.name}</a>
                      </React.Fragment>
                    )}
                  </div>
                  <div className={styles.content}>
                    {item.content}
                  </div>
                </div>
              )) }
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Comments)
