$(document).ready(function() {
  var input = $('.field').find('input, textarea')
  input.keyup(function() {
    inputTest(this)
  })
})

function inputTest(that) {
  var field = $(that).closest('.field')
  var form = $(that).closest('form, .form')
  var length = $.trim($(that).val()).length

  //  FILLED
  if(length > 0) field.addClass('filled')
  else field.removeClass('filled')

  //  VALIDATED
  if(length >= 4) {
    field.addClass('validated')
    form.addClass('validated')
  } else {
    field.removeClass('validated')
    form.removeClass('validated')
  }
}
