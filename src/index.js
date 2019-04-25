import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Question from './components/question';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      questions: [1],
    };
  }

  deleteQuestion = (id) => {
    // find want index value the ID is at
    let index = 0;
    while (this.state.questions[index] !== id) {
      index += 1;
    }
    // make a separate copy of the array
    const array = [...this.state.questions];
    // delete that element from the list using it's index location
    if (array.length > 1) {
      array.splice(index, 1);
    }
    this.setState({ questions: array });
  }

  addQuestion = () => {
    this.setState(prevState => ({ id: prevState.id + 1 }));

    this.setState((prevState) => {
      const array = prevState.questions;
      array.push(prevState.id);
      return { questions: array };
    });
  }

  render() {
    return (
      <div>
        {this.state.questions.map(x => (<Question id={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}
        <button type="button" onClick={this.addQuestion}> Add Question </button>
      </div>
    );
  }
}


// <button type="button" onClick={this.handleClick}>delete</button>

ReactDOM.render(<App />, document.getElementById('main'));
