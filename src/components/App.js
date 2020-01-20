import React from 'react';
import Buttons from './Buttons';
import Content from './Content';
import './App.css';

class App extends React.Component {
  state = { content: '' };

  componentDidMount() {
    this.setState({ content: this.props.content.description });
  }

  onButtonClick = buttonId => {
    if (buttonId === 0) {
      this.setState({ content: this.props.content.description });
    }

    if (buttonId === 1) {
      this.setState({ content: this.props.content.review });
    }

    if (buttonId === 2) {
      this.setState({ content: this.props.content.requirements });
    }
  };

  render() {
    return (
      <div className="ui container">
        <Buttons onButtonClick={this.onButtonClick} />
        <div className="ui segment">
          <Content content={this.state.content} />
        </div>
      </div>
    );
  }
}

export default App;
