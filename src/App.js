import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShown: false}

  toogleButton = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }))
  }

  render() {
    const {isShown} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toogleButton}
        >
          {isShown ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShown && <Clock />}
      </div>
    )
  }
}

export default App
