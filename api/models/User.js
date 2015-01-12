/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    firstName:{
        type:'string'
    },
    lastName:{
        type:'string'
    },
    accountType:{
        type:'string',
        in:['company', 'freeUser', 'paidUser'],
        defaultsTo: 'freeUser'
    }, //account type for the customer type
    userType:{
        type:'string',
        in:['admin','siteUser'],
        defaultsTo: 'siteUser' //maybe boolean type?
    }, // combine with the account type?
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
    },
    resumes:{
        collection: 'resume',
        via: 'owner'
    },
    company:{
        model: 'company'
    }
  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
