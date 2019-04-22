import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionWeight: 3,
    };
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };


  handleSliderChange = (event) => {
    this.setState({ questionWeight: event.target.value });
  };

  render() {
    return (
      <div>
        <p Distribution />
        <input type="range" min="0" max="6" value={this.state.questionWeight} onChange={this.handleSliderChange} />
      </div>
    );
  }
}


// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
