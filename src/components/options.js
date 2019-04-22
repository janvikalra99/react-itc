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


  makeNew = () => {
    const newArray = this.state.bars;
    newArray.push(<Bar makeNew={this.makeNew} id="test" />);
    this.setState({ bars: newArray });
  }


  // delete = () => {
  //   console.log('deleted!');
  //   // const newArray = this.state.bars;
  //   // newArray.splice(-1, 1);
  //   // this.setState({ bars: newArray });
  // }

  render() {
    return (
      <div>
        {this.state.bars}
      </div>
    );
  }
}


// bars: List.ofBar(Bar),
