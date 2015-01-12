/**
* Job.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

//    /**
//    * return the full address of the job
//    * and its long and lat
//    * @param  {object}   options
//    *            => jobId {Integer} id of the job
//    * @param  {Function} cb
//    */
//    canCreateJob: function(options,cb){
//        Job.find(options.jobId).exec(function(err,job){
//        // check if job exist
//            var address="";
//            if(err) return cb(err);
//            else{
//                address += job.jobStreet + " " + job.jobCity + " " + job.jobState + job.jobZip;
//                return {'address':address, 'long': '', 'lat': ''};
//            }
//        });
//    },
    /**
    * return the full address of the job
    * and its long and lat
    * @param  {object}   options
    *            => jobId {Integer} id of the job
    * @param  {Function} cb
    */
    fullAddress: function(options,cb){
        Job.find(options.jobId).exec(function(err,job){
        // check if job exist
            var address="";
            if(err) return cb(err);
            else{
                address += job.jobStreet + " " + job.jobCity + " " + job.jobState + job.jobZip;
                return {'address':address, 'long': job.longitude, 'lat': job.latitude};
            }
        });
    },
    attributes: {
        company:{
            model:'company'
        },
        title:{
            type:'string'
        },
        subTitile:{
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
        expiration:{
            type:'dateTime'
        },
        active:{
            type:'boolean',
            defaultsTo: true
        }
    }
};

