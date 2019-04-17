import React, { Component } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import styles from './post.module.scss'
import initPhotoSwipeFromDOM from './lib.gallery'

class Post extends Component {
  componentDidMount() {
    this.gallery && initPhotoSwipeFromDOM(this.gallery, this.props.post.id)
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
    const { user, images = [], content, createdAt, address } = this.props.post

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
                <a href="javascript: void(0)">{ address.locname }</a>
              </div>
            )
          }
          <footer className={styles.footer}>
            <div className={styles.createdAt}>
              { moment(createdAt).fromNow()}
            </div>
            <div className={styles.moreBtn}>
              <i />
              <i />
            </div>
          </footer>
        </section>
      </div>
    )
  }
}

export default Post
