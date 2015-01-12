/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create:function(req,res){

        User.findOne(req.session.user.id).exec(function(err, user){
            if(err) return res.forbidden(err);
            if(user.company===null){
                var companyData=req.body;
                companyData.user=user.id;
                Company.create(req.body).exec(function(err,companyCreated){
                    if(err) return res.forbidden(err);
                    User.update({id:user.id},{company:companyCreated.id}).exec(function(err,UserUpdated){
                        if(err) return res.json({'status':'NG'});

                        Company.find(companyCreated.id).populate('user').exec(function(err,companyCreated){
                            if(err) return res.json({'status':'NG'});
                            companyCreated[0].status=200;
                            return res.json(companyCreated[0]);
                        });
                    });
                });
            } else {
                return res.json({'status':'NG'});
            }
        });
    },
    destroy:function(req,res){
        return res.json({'status':'NG'});
    },
    update:function(req,res){
        User.findOne(req.session.user.id).exec(function(err, user){
            if (err) return res.forbidden(err);

            var companyId=parseInt(req.params.id);
            if(user.company===companyId){
                Company.update({id:companyId},req.body).exec(function(err,updated){
                    if(err) return res.json({'status':'NG'});
                    updated.status=200;
                    return res.json(updated);
                });
            } else {
                return res.json({'status':'NG'});
            }
        });
    }//,
};

