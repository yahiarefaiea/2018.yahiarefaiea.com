function secret() {
  Submit.listen('.template[data-template=secret] .submit')

  setTimeout(function() {
    var input = $('.template[data-template=secret] .field').find('input, textarea')

    input.focus()
    Identity.robot()
  }, Identity.duration*1.25)
}
