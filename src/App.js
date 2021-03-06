import React, { Component } from 'react';
import 'babel-register';
import 'react-table/react-table.css';
import 'react-rangeslider/lib/index.css';
import '../node_modules/react-select/dist/react-select.css';
import './App.css';
import SinglePane from './containers/layout/singlePane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SinglePane companies={null} />
      </div>
    );
  }
}

export default App;
