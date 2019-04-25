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
      questionType: 'multiplechoice',
    };
  }

  deleteQuestion = () => {
    this.props.deleteQuestion(this.state.id);
  }

  onSelectChange = (event) => {
    this.setState({
      questionType: event.target.value,
    });
  }


  render() {
    let options;
    if (this.state.questionType === 'multiplechoice' || this.state.questionType === 'checkbox') {
      options = <Options />;
    } else {
      options = '';
    }

    return (
      <div className="question">
        <QuestionHeader />
        <select name="questionType" onChange={this.onSelectChange}>
          <option value="multiplechoice">Multiple Choice</option>
          <option value="checkbox">Checkbox</option>
          <option value="shortanswer">Short Answer</option>
          <option value="paragraph">Paragraph</option>
        </select>
        {options}
        <Importance />
        <Distribution />
        <button type="button" onClick={this.deleteQuestion}> Delete Question </button>
      </div>
    );
  }
}
