import React, { Component } from 'react'
import Header from './header/Header'


class App extends Component {
  render() {
    return (
      <div className="wrapper-app">
        <Header />
        <div className="content"/>
        <div className="footer"/>
      </div>
    )
  }
}

export default App
