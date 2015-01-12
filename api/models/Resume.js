/**
* Resume.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    /**
    * return the owner of the resume
    * and if there is a return owner that means the the current user is the owner
    * @param  {object}   options
    *            => resumeId {Integer} id of the resume
    *            => userId {Integer} id of user
    * @param  {Function} cb
    */
    resumeOwner: function(options,cb){
        Resume.find(options.resumeId).populate('owner').exec(function(err,resume){
        // Check if user has rights to edit
            if(err) return cb(err);
            else{
                if(resume[0].owner.id===options.userId){
                    return cb(null,resume[0].owner);
                } else {
                    return cb(err);
                }
            }
        });
    },

    attributes: {
        owner:{
            model:'user'
        },
        job_1_company:{
            type:'string'
        },
        job_1_url:{
            type:'url'
        },
		job_1_start:{
            type:'datetime'
        },
		job_1_end:{
            type:'datetime'
        },
		job_1_present:{
            type:'boolean'
        },
		job_1_position:{
            type:'string'
        },
		job_1_desc:{
            type:'text'
        },
        edu_1_degree:{
            type:'string'
        },
		edu_1_major:{
            type:'string'
        },
		edu_1_school:{
            type:'string'
        },
		edu_1_grad:{
            type:'string'
        },
		edu_1_gpa:{
            type:'string'
        },
		certifications:{
            type:'string' // extract 1 to 1 model for more data?
        },
		salaryLast:{
            type:'integer'
        },
		salaryLastCurrency:{
            type:'string',
            in:['USD'],
            defaultsTo: 'USD'
        },
		salaryExpected:{
            type:'string'
        },
		salaryExpectedCurrency:{
            type:'string',
            in:['USD'],
            defaultsTo: 'USD'
        },
		negotiable:{
            type:'boolean'
        },
		legal:{
            type:'string'
        },
		available:{
            type:'date'
        },
		immediate:{
            type:'boolean'
        },
	    ref_1_name:{
            type:'string'
        },
		ref_1_contact:{
            type:'string'
        },
		ref_1_email:{
            type:'email'
        },
		ref_1_company:{
            type:'string'
        },
		ref_1_position:{
            type:'string'
        },
		ref_1_relation:{
            type:'string'
        }
    }
};

