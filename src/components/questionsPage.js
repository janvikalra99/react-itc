import React from 'react';
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
      questions: [1],
      inPreview: false,
      surveyjs: null,
      questionType,
      questionMap: new Map([[1, questionType]]),
      id: 1,
    };
    this.publishSurvey = this.publishSurvey.bind(this);
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
    /* update the questions list */
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

    /* update the questions Map */
    this.setState(prevState => ({
      questionMap: prevState.questionMap.delete(id),
    }));
  }

  addQuestion = () => {
    // increment ID
    this.setState(prevState => ({ id: prevState.id + 1 }));

    /* update the questions list */
    this.setState((prevState) => {
      const array = prevState.questions;
      array.push(prevState.id);
      return { questions: array };
    });

    /* update the questions list */
    const newQuestion = this.questionType;
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.id, newQuestion),
    }));
  }


  publishSurvey() {
    const surveyData = {
      title: 'Default Title',
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };
    const
    surveyData.pages[0].questions.push(newQuestion);

    console.log(`survey data: ${surveyData}`);

    this.setState({ surveyjs: surveyData });


    // const newQuestion = {
    //   type: 'radiogroup',
    //   name: 'car',
    //   title: 'What car are you driving?',
    //   isRequired: true,
    //   colCount: 4,
    //   choices: [
    //     'None',
    //     'Ford',
    //     'Vauxhall',
    //     'Volkswagen',
    //     'Nissan',
    //   ],
    // };


    // const title = 'default Title';
    // const surveyData = {
    //   title,
    //   pages: [
    //     {
    //       name: 'page1',
    //       questions: [],
    //     },
    //   ],
    // };
    //
    // const newQuestion = {
    //   type: 'radiogroup',
    //   name: 'car',
    //   title: 'What car are you driving?',
    //   isRequired: true,
    //   colCount: 4,
    //   choices: [
    //     'None',
    //     'Ford',
    //     'Vauxhall',
    //     'Volkswagen',
    //     'Nissan',
    //   ],
    // };
    //
    // surveyData.pages[0].questions.push(newQuestion);
    //
    // console.log(`survey data: ${surveyData}`);
    //
    // this.setState({ surveyjs: surveyData });
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
