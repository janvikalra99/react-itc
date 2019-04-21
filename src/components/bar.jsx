import React from 'react';


export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onKeyDown = (event) => {
    // if the user presses enter, call the makeNew function in Options
    // that creates a new bar and adds it to the existing list
    if (event.keyCode === 13) {
      this.props.makeNew();
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.onInputChange} onKeyDown={this.onKeyDown} />
      </div>
    );
  }
}
