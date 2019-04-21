import React from 'react';
import { List } from 'immutable';
import Bar from './components/bar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: List.ofBar(Bar),
    };
  }


  makeNew = () => {
    this.setState({
      bars: this.state.bars.push(<Bar makeNew={this.makeNew} />),
    });
  }

  render() {
    return (
      <div>
        {this.state.bars}
      </div>
    );
  }
}
