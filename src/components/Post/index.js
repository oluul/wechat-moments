import React, { Component } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import styles from './post.module.scss'

class Post extends Component {
  renderImages() {
    const { images } = this.props.post
    const wrapClass = 'len_' + images.length

    return (
      <div className={classnames(styles.images, wrapClass)}>
        {
          images.map(img => (
            <div
              key={img.id}
              className={styles.img}
              style={{ backgroundImage: `url(${img.url})`}}>
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    const { user, images = [], content, createdAt } = this.props.post

    return (
      <div className={classnames(this.props.className, styles.post)}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt={user.username} />
        </div>
        <section>
          <div className={styles.username}>{ user.username }</div>
          <div className={styles.content}>
            { content }
          </div>
          {
            !!images.length && this.renderImages()
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
