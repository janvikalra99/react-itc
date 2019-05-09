import React from 'react';
import Options from './options';
import Importance from './importance';
import Distribution from './distribution';
import QuestionHeader from './question_header';


export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      questionType: 'radiogroup',
    };
  }

  deleteQuestion = () => {
    this.props.deleteQuestion(this.state.id);
  }

  onSelectChange = (event) => {
    this.setState({
      questionType: event.target.value,
    });
    this.props.updateQuestionType(this.state.id, event.target.value);
  }


  render() {
    let options;
    if (this.state.questionType === 'radiogroup' || this.state.questionType === 'checkbox' || this.state.questionType === 'dropdown') {
      options = <Options />;
    } else {
      options = '';
    }

    return (
      <div className="question">
        <QuestionHeader />
        <select name="questionType" onChange={this.onSelectChange}>
          <option value="checkbox">Checkbox</option>
          <option value="radiogroup">Multiple Choice</option>
          <option value="comment">Short Answer</option>
          <option value="dropdown">Lookup</option>
        </select>
        {options}
        <Importance />
        <Distribution />
        <button type="button" onClick={this.deleteQuestion}> Delete Question </button>
      </div>
    );
  }
}
