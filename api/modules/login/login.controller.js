(function(){
    const Neighbour = require('../Neighbour/neighbour.model').neighbourModel;
    module.exports = function(){
        return {
           
            login: function(req,res){
                Neighbour.findOne({email: req.body.email, password: req.body.password}, function(error, neighbour){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else if(!neighbour){
                        res.status(404).json({
                            status: "not found",
                            body: neighbour
                        })
                    }
                    else{
                        res.status(200).json({
                            status: "success",
                            body: neighbour
                        })
                    }
                })
            },
            login1: function(req,res){
                Neighbour.findOne({_id: req.body._id}, function(error, neighbour){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else if(!neighbour){
                        res.status(404).json({
                            status: "not found",
                            body: neighbour
                        })
                    }
                    else{
                        res.status(200).json({
                            status: "success",
                            body: neighbour
                        })
                    }
                })
            }
        }
    }
})();