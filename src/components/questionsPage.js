import React from 'react';
import { Map } from 'immutable';
import '../style.scss';
import * as Survey from 'survey-react';
import Question from './question';
import 'survey-react/survey.css';

export default class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    // create a question object

    const questionType = {
      type: 'multiplechoice',
      name: 'id',
      title: 'questionTitle',
      isRequired: true,
      choices: [
        'choice1',
        'choice2',
      ],
    };
    this.state = {
      id: 1,
      inPreview: false,
      surveyjs: null,
      questionMap: Map(),
    };
    this.createStaticSurvey = this.createStaticSurvey.bind(this);
    // this.generateQuestion = this.generateQuestion.bind(this);
  }

  componentWillMount() {
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set('firstKey', 'firstItem'),
    }));
  }

  onComplete = (survey, options) => {
  // Write survey results into database
    console.log(`Survey results: ${JSON.stringify(survey.data)}`);
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

  deleteQuestion = (id) => {
    /* delete item from map */
    this.setState(prevState => ({
      questionMap: new Map([prevState.questionMap]).delete(id),
      // questionMap: prevState.questionMap.delete(id),
    }));
  }

  addQuestion = () => {
    // increment the id

    // console.log(`original map: ${this.state.questionMap}`);
    this.setState(prevState => ({ id: prevState.id + 1 }));

    // add new object to the Map
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.id, 'newState'),
    }));
  }


  createStaticSurvey() {
    const surveyData = {
      title: 'Default Title',
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
    this.setState({ surveyjs: surveyData });
  }

  generateQuestion(value, key) {
    return <Question id={key} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={key} />;
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
        {console.log(`original map value: ${this.state.questionMap}`)}
        <button type="button" onClick={this.addQuestion}> Add Question </button>
        <button type="button" onClick={this.startPreview}> Start Preview </button>
        <button type="button" onClick={this.createStaticSurvey}> Add JSON </button>
      </div>
    );
  }
}

// {this.state.questionMap.forEach(this.generateQuestion)}


// {this.state.questions.map(x => (<Question id={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}

// <button type="button" onClick={this.handleClick}>delete</button>
