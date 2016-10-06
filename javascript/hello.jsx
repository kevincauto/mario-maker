import React from 'react';
import ReactDOM from 'react-dom';
import World from './world.jsx';

export default class Hello extends React.Component {
  render() {
    return <h1>Hellooo</h1>
  }
}

class Smello extends React.Component {
  render() {
    return <h1>Smellooo</h1>
  }
}

ReactDOM.render(<World />, document.getElementById('app'))
