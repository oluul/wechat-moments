import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import * as actions from '../../store/actions'
import styles from './post.module.scss'
import initPhotoSwipeFromDOM from './lib.gallery'
import calSize from './lib.calSize'
import Comments from '../Comments'
import MoreBtn from '../MoreBtn'
import AutomaticUpdateTime from '../AutomaticUpdateTime'

function noop(evt) {
  evt.preventDefault()
}

class Post extends Component {
  componentDidMount() {
    this.gallery && initPhotoSwipeFromDOM(this.gallery, this.props.post.id)
  }

  likeHandler = () => {
    const action = actions.like(this.props.post.id)

    this.props.dispatch(action)
  }

  commentHandler = () => {
    if (window.confirm('提示：模拟native输入法，即将插入新内容')) {
      const action = actions.creatComment(this.props.post.id, {
        content: `模拟native输入法，写入随机内容 - ${Math.random().toString(36).substr(2)}`
      })

      this.props.dispatch(action)
    }
  }

  renderImages() {
    const { images } = this.props.post

    if (images.length === 1) {
      const img = images[0]
      const [width, height, wrapWidth, wrapHeight] = calSize(img.w, img.h)

      return (
        <div
          ref={ref => this.gallery = ref}
          className={classnames(styles.images, styles.single)}>
          <div
            className={classnames('g-item', styles.item)}
            data-width={img.w}
            data-height={img.h}
            data-url={img.url}
            style={{ width: wrapWidth, height: wrapHeight }}>
            <img src={img.url} style={{ width, height}} alt="" />
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref => this.gallery = ref}
        className={classnames(styles.images, styles.grid, `len-${images.length}`)}>
        {
          images.map(img => (
            <div
              key={img.id}
              className={classnames('g-item', styles.item)}
              data-width={img.w}
              data-height={img.h}
              data-url={img.url}
              style={{backgroundImage: `url(${img.url})`}} />
          ))
        }
      </div>
    )
  }

  render() {
    const {
      user,
      images = [],
      content,
      createdAt,
      address
    } = this.props.post

    return (
      <div className={classnames(this.props.className, styles.post)}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt={user.username} />
        </div>
        <section className={styles.body}>
          <a href="//g.cn" onClick={noop} className={styles.username}>{ user.username }</a>
          <div className={styles.content}>
            { content }
          </div>
          {
            !!images.length && this.renderImages()
          }
          {
            address && (
              <div className={styles.address}>
                <a href="//google.com" onClick={noop}>{ address.locname }</a>
              </div>
            )
          }
          <footer className={styles.footer}>
            <div className={styles.createdAt}>
              <AutomaticUpdateTime time={createdAt} />
            </div>
            <MoreBtn
              post={this.props.post}
              likeHandler={this.likeHandler}
              commentHandler={this.commentHandler}/>
          </footer>
          <Comments post={this.props.post} />
        </section>
      </div>
    )
  }
}

export default connect()(Post)
