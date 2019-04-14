import React, { Component } from 'react'
import Header from './components/Header'
import Moments from './components/Moments'
import styles from './app.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Moments />
      </div>
    )
  }
}

export default App
