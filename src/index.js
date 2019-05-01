import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsPage from './components/questionsPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onQuestionsPage: false,
    };
  }

  goToQuestionsPage = () => {
    this.setState({
      onQuestionsPage: true,
    });
  }


  render() {
    if (this.state.onQuestionsPage) {
      return (
        <div>
          <QuestionsPage />
        </div>
      );
    }
    return (
      <div>
        <p> dashboard </p>
        <button type="button" onClick={this.goToQuestionsPage}> Create Survey </button>
      </div>
    );
  }
}


// <button type="button" onClick={this.handleClick}>delete</button>

ReactDOM.render(<App />, document.getElementById('main'));
