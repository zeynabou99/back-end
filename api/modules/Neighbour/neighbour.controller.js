(function(){
    const Neighbour = require('./neighbour.model').neighbourModel;
    module.exports = function(){
        return {
            list: function(req, res){
                Neighbour.find({}, (error, list)=>{
                    if (error){
                        res.status(500).json({
                            status: "error",
                            body: error 
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: list
                        })
                    }
                })
            },
            create: function(req, res){
                console.log('save', req.body);
                var neighbour = new Neighbour(req.body);
                neighbour.save((error, rep)=>{
                    if(error){
                        res.status(500).json({
                           status: "error",
                           body: error  
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: rep
                        })
                    }
                })
            },
            read: function(req,res){
                Neighbour.findOne({_id: req.params.id}, function(error, neighbour){
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
            update: function(req,res){
                Neighbour.findOneAndUpdate({_id: req.params.id},req.body, {new: true} ,function(error, neighbour){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: neighbour
                        })
                    }
                })
            },
            delete: function (req,res) {
                Neighbour.deleteOne({_id: req.params.id}, function(error, rep){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(201).end()
                    }
                })
            }
        }
    }

})();