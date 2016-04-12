var publish = require('@ftbl/task').publish
  , Message = require('../repositories/message');

var SUBJECT = 'Contact from Website'
  , USER = { name: 'Johnny Hall', email: 'johnny@recipher.co.uk' };

var Sender = function(context) {
  if (this instanceof Sender === false) return new Sender(context);

  this.context = context;
};

var email = function(message, options) {
  publish('email', { user: USER, text: message.text, subject: SUBJECT, force: true, replyTo: message }, options);
};

Sender.prototype.send = function(data) {
  data.sentAt = new Date;

  return Message.create(data).then(function(message) {
    email(message, this.context);
    return message;
  }.bind(this));
};

module.exports = Sender;