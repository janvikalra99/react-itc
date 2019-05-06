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
    const newQuestion = {
      type: 'checkbox',
      name: 'id',
      title: 'questionTitle',
      isRequired: true,
      colCount: 4,
      choices: [
        'choice1',
        'choice2',
      ],
    };
    // set State
    this.state = {
      id: 1,
      inPreview: false,
      surveyjs: null,
      questionMap: Map(),
      questionType: newQuestion,
    };
    // this.createStaticSurvey = this.createStaticSurvey.bind(this);
    // this.generateQuestion = this.generateQuestion.bind(this);
  }

  componentWillMount() {
    // add one item to the quesitonMap
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.id, prevState.questionType),
    }));
    // create Survey Title
    const surveyData = {
      title: 'Default Title',
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };
    this.setState({ surveyjs: surveyData });
  }

  onComplete = (survey, options) => {
  // Write survey results into database
    console.log(`Survey results: ${JSON.stringify(survey.data)}`);
  }

  startPreview = () => {
    // surveyData blank slate
    const surveyData = {
      title: 'Default Title',
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };
    // put questionMap objects into surveyData
    let i,
      newQuestion;
    for (i = 1; i <= this.state.id; i += 1) {
      newQuestion = this.state.questionMap.get(i);
      surveyData.pages[0].questions.push(newQuestion);
    }
    // update surveyjs
    this.setState({ surveyjs: surveyData });

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
    this.setState(prevState => ({ id: prevState.id + 1 }));

    // add new object to the Map
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.id, prevState.questionType),
    }));
  }

  // createStaticSurvey() {
  //   const surveyData = this.state.surveyjs;
  //   const newQuestion = this.state.questionMap.get(0);
  //
  //   surveyData.pages[0].questions.push(newQuestion);
  //   this.setState({ surveyjs: surveyData });
  // }

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
      </div>
    );
  }
}

// {this.state.questionMap.forEach(this.generateQuestion)}


// {this.state.questions.map(x => (<Question id={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}

// <button type="button" onClick={this.handleClick}>delete</button>
