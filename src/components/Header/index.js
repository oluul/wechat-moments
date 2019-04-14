import React, { Component } from 'react'
import styles from './header.module.scss'

class Header extends Component {
  render() {
    const bannerImage = '/assets/banner-normal.jpg'

    return (
      <header className={styles.header}>
        <div
          className={styles.banner}
          style={{backgroundImage: `url(${bannerImage})`}} />
        <section className={styles.user}>
          <b className={styles.name}>Boldoo</b>
          <div className={styles.avatar}>
            <img src="/assets/avatar-normal.jpeg" />
          </div>
        </section>
      </header>
    )
  }
}

export default Header
