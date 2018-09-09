function secret() {
  var input = $('.template[data-template=secret] .field').find('input, textarea')

  //  FOCUS
  setTimeout(function() {
    input.focus()
  }, Identity.duration*1.25)

  //  ROBOT
  input.focus(Identity.robot)
  input.focusout(Identity.stop)
}
