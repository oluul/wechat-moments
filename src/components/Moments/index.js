import React, { Component } from 'react'
import { connect } from 'react-redux'
import { denormalize } from 'normalizr'
import * as schema from '../../store/schema'
import Post from '../Post'
import styles from './moments.module.scss'

/**
 * Moments
 * Include paging logic // TODO
 * @extends Component
 */
class Moments extends Component {
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

const mapStateToProps = ({ entities }) => {
  const { posts, users } = entities

  return {
    posts: denormalize(posts.allIds, [schema.post], {
      posts: posts.byId,
      users: users.byId
    })
  }
}

export default connect(mapStateToProps)(Moments)
