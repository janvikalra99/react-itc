import React from 'react';
// import { List } from 'immutable';
import Bar from './bar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      bars: [0, 1, 2],
    };
  }

  deleteBar = (id) => {
    // find want index value the ID is at
    let index = 0;
    while (this.state.bars[index] !== id) {
      index += 1;
    }
    // make a separate copy of the array
    const array = [...this.state.bars];
    // delete that element from the list using it's index location
    if (array.length > 1) {
      array.splice(index, 1);
    }
    this.setState({ bars: array });
  }

  makeNew = () => {
    this.setState(prevState => ({ id: prevState.id + 1 }));

    this.setState((prevState) => {
      const array = prevState.bars;
      array.push(prevState.id);
      return { bars: array };
    });
  }


  render() {
    return (
      <div>
        {this.state.bars.map(x => (<Bar id={x} makeNew={this.makeNew} deleteBar={this.deleteBar} key={x} initialText="add option" />))}
      </div>
    );
  }
}

// <button type="button" onClick={this.handleDelete}> delete </button>


// bars: List.ofBar(Bar),
