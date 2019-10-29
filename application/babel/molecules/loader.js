var md = new MobileDetect(window.navigator.userAgent)

$(document).ready(function() {
  Identity.work()
  $('.template main').mCustomScrollbar({
    theme: 'dark'
  })
  
  //  REAL PROGRESS INIT
  RealProgress.init()
  RealProgress.onLoad = function() {
    Router.route(undefined, function() {
      Router.listen()
      Submit.listen('.submit')
      if(!md.mobile()) Stars.init()
      setTimeout(function() {
        $('#signature').removeClass('loading')
      }, Identity.delay*1.5)
    })
  }
})
