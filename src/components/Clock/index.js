import {Component} from 'react'
import './index.css'

class Clock extends Component {
  // 1. this is a older approach and we can also directly write this.state = {date: new Date()}
  // and we can also get passed props to here like date.props when you pass at app.js to clock component  - mounting phase

  constructor(props) {
    super(props)

    this.state = {date: new Date()}
  }

  //3.in this we will write code that perform operations like setInterval,RESTapis after rendering  - mounting phase

  componentDidMount() {
    this.timerRunningByUser = setInterval(this.tickInClock, 1000)
  }

  //4. after unmounting we need clean up all the things so we will use this method componentWillUnmount in unmounting phase
  // and it will remove from DOM and insert again if need based on logic show and hide clock module example to this

  componentWillUnmount() {
    clearInterval(this.timerRunningByUser)
  }

  tickInClock = () => {
    this.setState({date: new Date()})
  }

  // 2. in render we will get jsx to display ui - mounting phase ,  Updating Phase

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">
          {date.toLocaleTimeString('en-US', {hour12: true})}
        </p>
      </div>
    )
  }
}
export default Clock
