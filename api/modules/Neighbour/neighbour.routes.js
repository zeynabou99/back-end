(function(){
    module.exports = function(app){
        const Ctrl = require('./neighbour.controller')();
        app.route('/neighbour')
            .get(Ctrl.list)
            .post(Ctrl.create)
        app.route('/neighbour/:id')
            .get(Ctrl.read)
            .put(Ctrl.update)
            .delete(Ctrl.delete)            
    }
})();