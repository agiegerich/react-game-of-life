import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    const grid = [];
    for (let i = 0; i < props.height; i++) {
      grid.push(Array(1).fill(null));
    }

    this.state = {
      grid: grid,
    }
  }
  render() {
    const rows = this.state.grid.map((row, index) => {
      return (<div key={index} className="row">Test</div>);
    });
    return (
        <div className="App">
          {rows}
        </div>
    );
  }
}

export default App;
