var Identity = {
  duration: 1500,
  iteration: 0,
  processing: false,
  enough: false,
  interval: null,
  callback: null,
  status: 'loading',
  id: '#identity',
  selector: '#identity div',
  classes: 'working rest robot',

  //  WORK
  work: function() {
    Identity.wait(function() {
      $(Identity.id).addClass('working')
    })
  },

  //  ROBOT
  robot: function() {

  },

  //  REST
  rest: function() {

  },

  //  WAIT
  wait: function(call) {
    if(Identity.processing != true) {
      if(typeof call === 'function' && call) call()
      Identity.processing = true
      Identity.waiting()
      Identity.interval = setInterval(Identity.waiting, Identity.duration)
    }
  },

  //  WAITING
  waiting: function() {
    if(Identity.enough != true) {
      ++Identity.iteration
      return
    }

    Identity.stopping()
  },

  //  STOP
  stop: function(callback) {
    if(Identity.processing == true) {
      Identity.enough = true
      Identity.callback = callback

      $(Identity.selector).attr('style',
      'animation-iteration-count: ' + Identity.iteration +
      '; -webkit-animation-iteration-count: ' + Identity.iteration + ';')
    }
  },

  //  STOPPING
  stopping: function() {
    clearInterval(Identity.interval)
    if(typeof Identity.callback === 'function' && Identity.callback) Identity.callback()

    setTimeout(Identity.reset, 200)
  },

  //  ABORT
  abort: function() {
    $(Identity.id).removeClass('working')
  },

  //  RESET
  reset: function() {
    Identity.iteration = 0
    Identity.processing = false
    Identity.enough = false
    Identity.interval = null
    Identity.callback = null

    Identity.abort()
    $(Identity.selector).removeAttr('style')
  }
}
