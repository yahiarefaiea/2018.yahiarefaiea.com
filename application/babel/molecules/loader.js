$(document).ready(function() {
  Identity.work()
  Stars.init()
  $('.template main').mCustomScrollbar({
    theme: 'dark'
  })

  //  JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    Router.route(undefined, function() {

      //  CALLBACK
      Router.listen()
      Submit.listen('.submit')
      setTimeout(function() {
        $('#signature').removeClass('loading')
      }, Identity.delay*1.5)
    })
  })
})
