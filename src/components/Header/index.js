import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './header.module.scss'

class Header extends Component {
  render() {
    const { profile } = this.props

    return (
      <header className={styles.header}>
        <div
          className={styles.banner}
          style={{backgroundImage: `url(${profile.banner})`}} />
        <section className={styles.user}>
          <b className={styles.name}>{profile.name}</b>
          <div className={styles.avatar}>
            <img src={`${profile.avatar}`} alt={profile.name} />
          </div>
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Header)
