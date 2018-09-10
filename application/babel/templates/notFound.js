function notFound() {
  setTimeout(function() {
    Timer.run('.template[data-template=notFound] time',
    function() {
      Router.route('#')
    }, 5)
  }, Identity.duration*1.25)
}

function notFoundCallback() {
  Timer.reset()
}
