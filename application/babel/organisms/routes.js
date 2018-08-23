Router.routes = function(callback) {
  Router.wrapper = []
  var location = Router.location.split('/').filter(Boolean)

  //  HOME
  if(location[0] === undefined) {
    Router.push('home')
  }

  //  SECRET
  else if(location[0] == 'secret' && location[1] === undefined) {
    Router.push('secret')
  }

  //  BUCKET
  else if(location[0] == 'bucket') {

    //  BUCKET HOME
    if(location[1] === undefined) {
      Router.push('bucket')
    }

    //  BUCKET ALL
    else if(location[1] == 'all' && location[2] === undefined) {
      Router.push('bucketAll')
    }
  }

  //  NOT FOUND
  else Router.push('notFound')

  //  CALLBACK
  Router.callback(callback)
}
