var _ = require('lodash')
  , inherits = require('util').inherits
  , Promise = require('bluebird')
  , Base = require('@ftbl/store').Repository
  , schema = require('../schemas/message');

var NAME = 'message';

var Repository = function() {
  if (this instanceof Repository === false) return new Repository;

  Base.call(this, NAME, schema);
};

inherits(Repository, Base);

Repository.prototype.sanitize = function(message) {
  if (message == null) return;
  
  if (message.sentAt) message.sentAt = new Date(message.sentAt).toISOString();

  return message;
};

Repository.prototype.clean = function(message) {
  if (message == null) return;

  return message;
};

module.exports = new Repository;
