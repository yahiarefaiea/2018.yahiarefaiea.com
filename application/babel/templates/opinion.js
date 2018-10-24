var opinionAvailability = true
function opinion() {
  if(opinionAvailability == true) {
    setTimeout(function() {
      var input = $('.template[data-template=opinion] .field').find('input, textarea')

      input.focus()
      Identity.robot()
    }, Identity.duration*1.25)
  }
}
