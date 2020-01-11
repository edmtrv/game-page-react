import React from 'react';
import Buttons from './Buttons';
import Content from './Content';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Buttons />
        <div className="ui segment">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
