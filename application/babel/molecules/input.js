$(document).ready(function() {

  var input = $('.field').find('input, textarea')

  input.keyup(function() {
    var field = $(this).closest('.field')
    var form = $(this).closest('form, .form')
    var length = $.trim($(this).val()).length

    //  FILLED
    if(length > 0) field.addClass('filled')
    else field.removeClass('filled')

    //  VALIDATED
    if(length > 5) {
      field.addClass('validated')
      form.addClass('validated')
    } else {
      field.removeClass('validated')
      form.removeClass('validated')
    }
  })

})
