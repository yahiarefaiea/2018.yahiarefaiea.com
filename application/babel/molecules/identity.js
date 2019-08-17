var Identity = {
  duration: 1400,
  delay: 500,
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
    if(Identity.status != 'loading') Identity.status = 'working'
    Identity.wait(function() {
      $(Identity.id).addClass('working')
    })
  },

  //  ROBOT
  robot: function() {
    Identity.status = 'robot'
    Identity.wait(function() {
      $(Identity.id).addClass('robot')
    })
  },

  //  REST
  rest: function() {
    Identity.abort()
    Identity.status = 'rest'
    setTimeout(function() {
      Identity.abort()
      $(Identity.id).addClass('rest')
    }, Identity.delay)
  },

  //  WAIT
  wait: function(call) {
    if(Identity.processing != true) {
      Identity.abort()
      Identity.processing = true

      setTimeout(function() {
        if(typeof call === 'function' && call) call()
        Identity.waiting()
        Identity.interval = setInterval(Identity.waiting, Identity.duration)
      }, Identity.delay)
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
    setTimeout(function() {
      if(Identity.processing == true) {
        Identity.enough = true
        Identity.callback = callback

        $(Identity.selector).attr('style',
        'animation-iteration-count: ' + Identity.iteration +
        '; -webkit-animation-iteration-count: ' + Identity.iteration + ';')
      }
    }, Identity.delay)
  },

  //  STOPPING
  stopping: function() {
    clearInterval(Identity.interval)
    Identity.rest()

    if(typeof Identity.callback === 'function' && Identity.callback) Identity.callback()
    Identity.reset()
  },

  //  ABORT
  abort: function() {
    if(Identity.status == 'robot')
      $(Identity.id).removeClass('robot')
    else if(Identity.status != 'loading' && Identity.processing != true) {
      $(Identity.id).removeClass(Identity.classes + ' loading')
      $('#burger').removeClass('loading')
    }
    else $(Identity.id).removeClass(Identity.classes)
  },

  //  RESET
  reset: function() {
    Identity.iteration = 0
    Identity.processing = false
    Identity.enough = false
    Identity.interval = null
    Identity.callback = null

    $(Identity.selector).removeAttr('style')
  }
}
