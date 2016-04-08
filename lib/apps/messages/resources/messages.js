var Sender = require('../services/sender');

module.exports = function(middleware, errors) {
  
  return { 
    post: function *(next) {
      var sender = new Sender(this.context);

      this.status = 200;
      this.body = { message: yield sender.send(this.request.body.message) }; 
    }
  };
};