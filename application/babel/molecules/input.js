$(document).ready(function() {

  var input = $('.field').find('input, textarea')

  input.keyup(function() {
    var length = $.trim($(this).val()).length
    var field = $(this).closest('.field')
    var form = $(this).closest('form, .form')

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
