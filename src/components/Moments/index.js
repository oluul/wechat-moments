import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Post'
import styles from './moments.module.scss'

class Moments extends Component {
  static defaultProps = {
    posts: []
  }

  render() {
    return (
      <div className={styles.moments}>
        { this.props.posts.map(post => (
          <Post
            key={post.id}
            className={styles.post}
            post={post} />
        )) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Moments)
