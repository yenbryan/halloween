/**
 * ResumeController
 *
 * @description :: Server-side logic for managing resumes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create:function(req,res){
        var postedData = req.body;
        postedData.owner=req.session.user.id;
        Resume.create(postedData).exec(function (err,resumeCreated){
            console.log(resumeCreated);
            if(err) return res.json({'status':'NG'});

            Resume.find(resumeCreated.id).populate('owner').exec(function(err,fullResume){
                if(err) return res.json({'status':'NG'});
                fullResume[0].status=200;
                res.json(fullResume[0]);
            });
        });
    },
    update:function(req,res){
        var resumeId=req.param('id');

        Resume.resumeOwner({'resumeId':resumeId,'userId':req.session.user.id},function(err,owner){
            if(err) return res.json({'status':confcodes.errorStatus});

            else {
                Resume.update(resumeId,req.body).exec(function(err,updatedResume) {
                    // if resume update was successful
                    if (err) return res.json({'status': confcodes.errorStatus});

                    updatedResume[0].status = 200;
                    return res.json(updatedResume[0]);
                });
            }
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

