
import React from 'react';
import './App.css';
import Number from './Number';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  onClick(e) {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <Number number={this.state.count} />
        <button onClick={this.onClick.bind(this)}>Count</button>
      </div>
    )
  }
}
export default App;