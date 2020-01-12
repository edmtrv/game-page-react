import React from 'react';
import Buttons from './Buttons';
import Content from './Content';
import './App.css';

class App extends React.Component {
  state = { text: '' };

  componentDidMount() {
    this.setState({ text: this.props.content.description });
  }

  render() {
    return (
      <div className="ui container">
        <Buttons />
        <div className="ui segment">
          <Content content={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
