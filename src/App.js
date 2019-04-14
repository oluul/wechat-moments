import React, { Component } from 'react'
import Header from './components/Header'
import styles from './app.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
      </div>
    )
  }
}

export default App
