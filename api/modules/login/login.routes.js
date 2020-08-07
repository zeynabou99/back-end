(function(){
    module.exports = function(app){
        const Ctrl = require('./login.controller')();
        app.route('/login')
            .post(Ctrl.login) 
        app.route('/login/:id') 
            .post(Ctrl.login1)          
    }
})();