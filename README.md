# Quiz machine

For this weekend weekend project we will create a quiz app. Please implement features from the set below.

You are welcome to build the application using just React or use Redux as well. See Redux getting started guide at the end.

We will be using Open Trivia Database database to obtain questions. You can load random questions, one at a time from [https://opentdb.com/api.php?amount=1&type=multiple](https://opentdb.com/api.php?amount=1&type=multiple). The API returns both `true`/`false` questions as well as multiple choice. We will use multiple choice by default.

The question received from the API will have a structure similar to below and provide a `correct` answer as well as several incorrect answers.

```js
{
  "response_code":0,
  "results":[
    {
      "category":"Entertainment: Video Games",
      "type":"multiple",
      "difficulty":"medium",
      "question":"Which of these characters was almost added into Super Smash Bros. Melee, but not included as the game was too far in development?",
      "correct_answer":"Solid Snake",
      "incorrect_answers":[
        "Pit",
        "Meta Knight",
        "R.O.B."
      ]
    }
  ]
}
```


See [https://opentdb.com/api\_config.php](https://opentdb.com/api_config.php) for more info on the API.

## Instructions

* Fork and clone this repo. Run `npm install` to get all dependencies.

* Load the first question automatically at the beginning using `componentDidMount` and display it to the user. Alongside buttons for the answers.

* If the user clicks a correct answer, notify the user and increment the score by 1. On an incorrect answer, notify the user and reset the score to 0. You are welcome to use an alternative scoring system if you prefer.

* If the user answers the question correctly load the next question.

* Each correct answer should increment the score. It's up to you how you want to score answers. You could apply a different score for different difficulty grades. After each correct answer display the next question

* Make the app responsive and look good at all screen sizes.

## Stretch goals - feel free to pick

* Show the user a 'happy' animated gif on a correct answer and a 'sad' gif on incorrect answer.

* Allow user to select question category

* Allow user to select difficulty level

* Add some unit tests

* Implement a scoring system that gives higher scores for more difficult questions

* Create a high score table. When a user finishes the game, for example answers a question incorrectly, allow them to enter their name and add it along with score to a high score table.

* Display statistics about player performance such as total questions played, average score, most popular category, category with highest percentage of correct etc.

* Allow both `true`/`false` and multiple choice questions to be played.

* Implement an extension of your choice.

## Additional info

* Document your solution in a README.md
* Make frequent commits
* Create a pull request at the end

## Redux getting started guide

![](/redux.png)

If you are using planning to use Redux, use the steps below to help you get started.

- Create a React `Question` component that will display a question to the user. It will receive 2 props from container.

  - `question` object - current question from store that will come from `mapStateToProps`
  - `fetchQuestion` function - which will be used to trigger the fetching of a new `question` using `mapDispatchToProps`

- The React `Question` component should implement a `componentDidMount` method that we will use to trigger the initial question load. Add a console.log at the beginning of `componentDidMount` to output `Step 1: calling fetchQuestion`.

- Create a Redux `QuestionContainer` that will talk to Redux on behalf of `Question` component.

- In `QuestionContainer` implement a `mapDispatchToProps` method which we will use to receive the `fetchQuestion` call from the `QuestionComponent`. Add a console.log inside the method which implements `fetchQuestion` in `mapDispatchToProps` saying `Step 2: getting action creator`

- Create an asynchronous action creator in `actions/index.js` called `fetchQuestionFromAPI`. It should return a function which will receive `dispatch`. Inside the function, implement a `fetch` to the API to receive the question. Add a console.log just inside the action creator saying `Step 3: calling fetch`. Add another console.log inside the second `then` of the `fetch` and console.log the returned data.

- Import the `fetchQuestionFromAPI` action creator from previous step into `QuestionContainer` call it using `dispatch` from `mapDispatchToProps`.

- Implement a new action, which will receive data returned by the fetch call and return a new action object which should have an action type of `RECEIVE_QUESTION` and a `question` property which should be set the received question object. Add a console.log with `Step 4 - creating RECEIVE_QUESTION question object` to the action creator.

- Implement a reducer called `question` to handle the `RECEIVE_QUESTION` action and set it in state. Add a console.log with `Step 5 - setting question in state`. You may want to initialise the default value of state to be an empty object. Don't forget to implement the default case.

- Add the `question` reducer to `reducers/index.js` and remove the `placeholder` reducer as we no longer need it.

- Implement `mapStateToProps` in `QuestionContainer` which should take the `question` from reducer state and pass it as a `question` prop to the `Question` component. Add a console.log to `mapStateToProps` which outputs `Step 6 - calling mapStateToProps in QuestionContainer`.

- Add some conditional rendering that checks if the question object received as `props` is not just an empty object to ensure it can be rendered without errors.
