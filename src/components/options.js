import React from 'react';
// import { List } from 'immutable';
import Bar from './bar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [<Bar makeNew={this.makeNew} id="test" initialText="option1" />,
        <Bar makeNew={this.makeNew} id="test" initialText="add option" />],
    };
  }

  // makeNew = () => {
  //   this.setState(prevState => ({
  //     bars: prevState.bars.push(<Bar makeNew={this.makeNew} />),
  //   }));
  // }

  // makeNew = () => {
  //   this.setState(prevState => ({
  //     bars: prevState.bars.push(<Bar makeNew={this.makeNew} />),
  //   }));
  // }


  makeNew = () => {
    const newArray = this.state.bars; // make sure this text is focused
    newArray.push(<Bar makeNew={this.makeNew} id="test" handleFocus={this.handleFocus} />);
    this.setState({ bars: newArray });
    return <Bar makeNew={this.makeNew} id="test" handleFocus={this.handleFocus} />;
  }

  render() {
    return (
      <div>
        {this.state.bars}
      </div>
    );
  }
}


// bars: List.ofBar(Bar),
