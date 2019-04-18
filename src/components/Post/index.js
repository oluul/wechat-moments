import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import classnames from 'classnames'
import * as actions from '../../store/actions'
import styles from './post.module.scss'
import initPhotoSwipeFromDOM from './lib.gallery'
import MoreBtn from '../MoreBtn'

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

  renderImages() {
    const { images } = this.props.post
    const wrapClass = 'len_' + images.length

    return (
      <div
        ref={ref => this.gallery = ref}
        className={classnames(styles.images, wrapClass)}>
        {
          images.map(img => (
            <div
              key={img.id}
              className={classnames('g-item', styles.img)}
              data-width={img.w}
              data-height={img.h}
              data-url={img.url}
              style={{ backgroundImage: `url(${img.url})`}}>
            </div>
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
      address,
      likeList = []
    } = this.props.post

    return (
      <div className={classnames(this.props.className, styles.post)}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt={user.username} />
        </div>
        <section className={styles.body}>
          <div className={styles.username}>{ user.username }</div>
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
              { moment(createdAt).fromNow()}
            </div>
            <MoreBtn post={this.props.post} likeHandler={this.likeHandler} />
          </footer>
          {
            !!likeList.length && (
              <div className={styles.likeBox}>
                <i className={classnames('iconfont', styles.icon)}>&#xe64f;</i>
                { likeList.map(d => (
                  <a className={styles.item} key={d.id} href="//google.com" onClick={noop}>
                    {d.user.name}
                  </a>
                )) }
              </div>
            )
          }
        </section>
      </div>
    )
  }
}

export default connect()(Post)
