import React from 'react';


export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.initialText,
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

  handleFocus = event => event.target.select();

  render() {
    return (
      <div>
        <input autoFocus value={this.state.text} onChange={this.onInputChange} onKeyDown={this.onKeyDown} onFocus={this.handleFocus} />
      </div>
    );
  }
}


// Focus the right way:
// componentDidMount() {
//   this.highlightInput.focus();
// }
// ref={(input) => { this.highlightInput = input; }}


// PRINTING IN JVSRIPT      console.log(`makenew value:${makeNew}`);
