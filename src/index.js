import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Options from './components/options';
// import Bar from './components/bar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div>
        <Options />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
