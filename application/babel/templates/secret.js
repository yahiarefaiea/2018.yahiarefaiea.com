var secretAvailability = true
function secret() {
  if(secretAvailability == true) {
    setTimeout(function() {
      var input = $('.template[data-template=secret] .field').find('input, textarea')

      input.focus()
      Identity.robot()
    }, Identity.duration*1.25)
  }
}
