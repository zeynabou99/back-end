(function(){
    const Image = require('./image.model').imageModel;
    const multer = require('multer'),
            fs = require('fs');

    module.exports = function(){
        return {
            list: function(req, res){
                Image.find({}, (error, list)=>{
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
                });
            },
            create: function(req, res){
                console.log('save', req.body);
                var image = new Image(req.body);
                image.save((error, rep)=>{
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
                Image.findOne({_id: req.params.id}, function(error, image){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else if(!image){
                        res.status(404).json({
                            status: "not found",
                            body: image
                        })
                    }
                    else{
                        res.status(200).json({
                            status: "success",
                            body: image
                        })
                    }
                })
            },
            update: function(req,res){
                Image.findOneAndUpdate({_id: req.params.id},req.body, {new: true} ,function(error, image){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(200).json({
                            status: "success",
                            body: image
                        })
                    }
                })
            },
            delete: function (req,res) {
                Image.deleteOne({_id: req.params.id}, function(error, rep){
                    if(error){
                        res.status(500).json({
                            status: "error",
                            body: error
                        })
                    }else{
                        res.status(201).end()
                    }
                })
            },
            upload: function(req,res){
                var upload = multer({dest: 'public/fichiers'}).single('sound');
                upload(req, res, function (err) {
                    if (err) {
                        res.status(500).json({
                            status: "error",
                            body: err
                        })
                    } else {
                        let filename = req.file.originalname.split('.');
                        let extension = filename[filename.length - 1];
                        fs.rename(req.file.path,req.file.path+'.'+extension,function(err){
                            req.body.date = new Date();
                            req.body.extension = extension;
                            let image = new Image(req.body);
                            image.sound = req.file.filename + '.' +extension;
                            image.save(function(error,img){
                                if(error){
                                    res.status(500).json({
                                        status: "error",
                                        body: error
                                    })
                                }else{
                                    res.status(200).json({
                                        status: "success",
                                        body: img
                                    })
                                }
                            })
                        })
                        
                    }
                  })
            }
        }
    }

})();