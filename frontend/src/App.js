import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { Test } from './Test'

const Test = lazy(() => import('./Test'));
class App extends Component {
  state = {
    value: '',
  };
  componentDidMount = () => {
    const a = {"name": "aaa name", "age": 11};
    const b = {...a, "name": "bbb name"};
    axios.get("/test")
      .then(response => {
        this.setState({
          value: response.data
        });
        console.log(this.state.value)
      }).catch(e => {
      console.log(e);
    });
    console.log(a);
    console.log(b);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Suspense fallback={<div>Loading..</div>}>
            <Test />
          </Suspense>
          <p>
            qqqEdit <code>src/App.js</code> and save to reload.
            {this.state.value}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
