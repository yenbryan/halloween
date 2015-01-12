/**
* Quiz.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      quizId:{
          type:'string'
      },
      name:{
          type:'string'
      },
      description:{
          type:'string'
      },
      score:{
          type:'integer'
      },
      scoreMax:{
          type:'integer'
      },
      scorePass:{
          type:'integer'
      }
  }
};

