import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Options from './components/options';
import Importance from './components/importance';
import Distribution from './components/distribution';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div>
        <h> Question #</h>
        <Options />
        <Importance />
        <Distribution />
      </div>
    );
  }
}


// <button type="button" onClick={this.handleClick}>delete</button>

ReactDOM.render(<App />, document.getElementById('main'));
