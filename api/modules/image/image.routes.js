(function(){
    module.exports = function(app){
        const Ctrl = require('./image.controller')();
        app.route('/image')
            .get(Ctrl.list)
            .post(Ctrl.upload)
        app.route('/image/:id')
            .get(Ctrl.read)
            .put(Ctrl.update)
            .delete(Ctrl.delete)            
    }
})();