/**
 * JobController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create:function(req,res){
        User.findOne(req.session.user.id).populate('company').exec(function(err,user){
            if(err) return res.json({'status':'NG'});

            var postedData=req.body;
            postedData.company=user.company.id;
            Job.create(postedData).exec(function(err,jobCreated){
                if(err) return res.json({'status':'NG'});

                Job.find(jobCreated.id).populate('company').exec(function(err,fullJob){
                    if(err) return res.json({'status':'NG'});
                    fullJob[0].status=200;
                    res.json(fullJob[0]);
                });
            });
        });
    },
    destroy:function(req,res){
        Job.findOne(req.params.id).populate('company').exec(function(err,job){
            if(err) return res.json({'status':'NG'});

            if(parseInt(job.company.user)===req.session.user.id){
                Job.update(job.id,{'active':false}).exec(function(err,updatedJob){
                    if(err) return res.json({'status':'NG'});
                    updatedJob[0].status=200;
                    return res.json(updatedJob[0])
                });
            } else {
                return res.forbidden({'status':'NG'});
            }
        });
    },
    update:function(req,res){
        Job.findOne(req.params.id).populate('company').exec(function(err,job){
            if(err) return res.json({'status':'NG'});

            if(parseInt(job.company.user)===req.session.user.id){
                Job.update(job.id,req.body).exec(function(err,updatedJob){
                    if(err) return res.json({'status':'NG'});
                    updatedJob[0].status=200;
                    return res.json(updatedJob[0])
                });
            } else {
                return res.forbidden({'status':'NG'});
            }
        });
    },
    find:function(req,res){
        Job.find({where:{active:true}}).exec(function(err,job){
            if(err) return res.json({'status':'NG'});

            else return res.json(job);
        });
    }
//find
//findOne
//create
//update
//destroy
//populate
//add
//remove
};

