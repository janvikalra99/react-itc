import React from 'react';
import { Map } from 'immutable';
import '../style.scss';
import * as Survey from 'survey-react';
import Question from './question';
import 'survey-react/survey.css';

export default class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      questions: [1],
      inPreview: false,
      surveyjs: null,
      questionMap: new Map(),
      id: 0,
    };
    this.createStaticSurvey = this.createStaticSurvey.bind(this);
  }

  onComplete = (survey, options) => {
  // Write survey results into database
    console.log(`Survey results: ${JSON.stringify(survey.data)}`);
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

  startPreview = () => {
    this.setState({
      inPreview: true,
    });
  }

  endPreview = () => {
    this.setState({
      inPreview: false,
    });
  }

  createStaticSurvey() {
    const title = 'default Title';
    const surveyData = {
      title,
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };

    const newQuestion = {
      type: 'radiogroup',
      name: 'car',
      title: 'What car are you driving?',
      isRequired: true,
      colCount: 4,
      choices: [
        'None',
        'Ford',
        'Vauxhall',
        'Volkswagen',
        'Nissan',
      ],
    };

    surveyData.pages[0].questions.push(newQuestion);

    console.log(`survey data: ${surveyData}`);

    this.setState({ surveyjs: surveyData });
  }


  render() {
    if (this.state.inPreview) {
      return (
        <div>
          <script src="https://surveyjs.azureedge.net/1.0.79/survey.react.min.js" />
          <link href="https://surveyjs.azureedge.net/1.0.79/survey.css" type="text/css" rel="stylesheet" />
          <button type="button" onClick={this.endPreview}> End Preview </button>
          <Survey.Survey json={this.state.surveyjs} onComplete={this.onComplete} />
        </div>
      );
    }
    return (
      <div>
        {this.state.questions.map(x => (<Question id={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}
        <button type="button" onClick={this.addQuestion}> Add Question </button>
        <button type="button" onClick={this.startPreview}> Start Preview </button>
        <button type="button" onClick={this.createStaticSurvey}> Add JSON </button>
      </div>
    );
  }
}


// <button type="button" onClick={this.handleClick}>delete</button>
