import React, { Component } from 'react'
import styles from './header.module.scss'

const prefix = process.env.PUBLIC_URL
const bannerImage = prefix + '/assets/banner-normal.jpg'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div
          className={styles.banner}
          style={{backgroundImage: `url(${bannerImage})`}} />
        <section className={styles.user}>
          <b className={styles.name}>Boldoo</b>
          <div className={styles.avatar}>
            <img src={`${prefix}/assets/avatar-normal.jpg`} alt="" />
          </div>
        </section>
      </header>
    )
  }
}

export default Header
