import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p> How important is this question? </p>
        <input type="radio" value="Not Important" name="gender" /> Not important
        <input type="radio" value="Not very important" name="gender" /> Not very important
        <input type="radio" defaultChecked value="Somewhat important" name="gender" /> Somewhat important
        <input type="radio" value="Important" name="gender" /> Important
        <input type="radio" value="Very Important" name="gender" /> Very Important
      </div>
    );
  }
}
