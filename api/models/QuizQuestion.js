/**
* Quiz.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      questions:{
          type:'text'
      },
      quiz:{
          // one to many with Quiz
          type:'string'
      },
      answers:{
          // one to many with QuizAnswer
      },
//      "id": "Q0_ITIL",
//			"number": 1,
//			"numberMin": 1,
//			"numberMax": 40,
//			"marked": true,
//			"question": "One plus one equals to?",
//			"answer": null,
//			"answersCount": 5,
//			"answers": [
//			            { "id": "a", "desc": "One" },
//			            { "id": "b", "desc": "Two" },
//			            { "id": "c", "desc": "Three" },
//			            { "id": "d", "desc": "Four" },
//			            { "id": "e", "desc": "Five" }
  }
};

