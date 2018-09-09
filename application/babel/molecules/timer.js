var Timer = {
  length: null,
  time: null,
  selector: null,
  interval: null,
  callback: null,

  //  RUN
  run: function(selector, callback, length) {
    Timer.length = length
    Timer.time = Timer.length
    Timer.selector = selector
    Timer.callback = callback
    $(Timer.selector).text(Timer.length)
    Timer.interval = setInterval(Timer.count, 1000)
  },

  //  COUNT
  count: function() {
    Timer.time = Timer.time - 1
    $(Timer.selector).text(Timer.time)
    if(Timer.time <= 0) {
      if(typeof Timer.callback === 'function' && Timer.callback) Timer.callback()
      Timer.reset()
    }
  },

  //  RESET
  reset: function() {
    clearInterval(Timer.interval)
    Timer.length = null
    Timer.time = null
    Timer.selector = null
    Timer.interval = null
    Timer.callback = null
  }
}
