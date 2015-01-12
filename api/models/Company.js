/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user:{
        model:'user'
    }, //one to one relationship to the user
    jobs:{
        collection: 'job',
        via: 'company'
    },
    name:{
        type:'string'
    },
    description:{
        type:'text'
    },
    address:{
        type:'string'
    },
    city:{
        type:'string'
    },
    state:{
        type:'string',
        in:['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
    },
    zip:{
        type:'string',
        maxLength:5
    },
    longitude:{
        type:'float'
    },
    latitude:{
        type:'float'
    },
    phoneNumber:{
        type:'string',
        maxLength:10
    }
  }
};

