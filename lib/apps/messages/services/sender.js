var publish = require('@ftbl/task').publish
  , Message = require('../repositories/message');

var Sender = function(context) {
  if (this instanceof Sender === false) return new Sender(context);

  this.context = context;
};

var email = function(message, options) {
  publish('email', { user: {
    name: configuration('email:name')
  , email: configuration('email:from')
  }, text: message.text, subject: 'Contact from Website', force: true, replyTo: message }, options);
};

Sender.prototype.send = function(data) {
  data.sentAt = new Date;

  return Message.create(data).then(function(message) {
    email(message, this.context);
    return message;
  }.bind(this));
};

module.exports = Sender;