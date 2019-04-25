import React from 'react';


export default class QuestionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: 'Question #',
    };
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  }


  handleFocus = event => event.target.select();

  render() {
    return (
      <div>
        <input type="title" value={this.state.text} onChange={this.onInputChange} onFocus={this.handleFocus} id={this.state.id} />

      </div>
    );
  }
}
