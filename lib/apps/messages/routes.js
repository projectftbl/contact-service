module.exports = function(router, resource, middleware, errors) {
  var messages = resource.messages(middleware, errors);
  
  router.post('/', messages.post);
};
