module.exports = {
  required: true
, type: 'object'
, properties: {
    text: { required: true, type: 'string' }
  , email: { required: true, type: 'string' }
  , name: { required: true, type: 'string' }
  , sentAt: { required: true, type: 'string', format: 'date-time' }
  }
};