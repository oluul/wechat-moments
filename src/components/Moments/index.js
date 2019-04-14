import React, { Component } from 'react'
import Post from '../Post'
import styles from './moments.module.scss'

class Moments extends Component {
  static defaultProps = {
    posts: [
      {
        user: {
          id: '001',
          username: "Boldoo",
          avatar: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg'
        },
        content: "我今天就是不讲理了！你现在打110也好，打工商局也好，把我带走，把我曝光！我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
        images: [
          'http://image.bitautoimg.com/appimage-630-w0/appimage/media/20190414/w702_h457_216f909d4d164c85b5a32ba308af4ed7.png'
        ],
        createdAt: 1555254569270
      },
      {
        user: {
          id: '001',
          username: "Hairhan",
          avatar: process.env.PUBLIC_URL + '/assets/avatar-normal.jpg'
        },
        content: "我打110人家不接，我打工商局人家不接，我希望你们能给我一个机会，让我被捉走。我就不信这个天下没有说理的地方！66万买个车，1公里都没开，就要更换发动机，还被迫让我接受这是三包。我没开出门啊，大哥！",
        createdAt: 1555254569270
      }
    ]
  }

  render() {
    return (
      <div className={styles.moments}>
        { this.props.posts.map(post => (
          <Post
            ket={post.id}
            className={styles.post}
            post={post} />
        )) }
      </div>
    )
  }
}

export default Moments
