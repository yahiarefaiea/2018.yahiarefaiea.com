Router.callbacks = function(wrapper) {
  if(wrapper == 'secret') secret()
  else if(wrapper == 'bucketAll') bucketAll()
  else if(wrapper == 'notFound') notFound()
}
