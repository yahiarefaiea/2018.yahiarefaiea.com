function secret() {
  setTimeout(function() {
    var input = $('.template[data-template=secret] .field').find('input, textarea')

    input.focus()
    Identity.robot()
  }, Identity.duration*1.25)
}
